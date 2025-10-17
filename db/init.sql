DROP TABLE IF EXISTS open_challenge_submissions CASCADE;
DROP TABLE IF EXISTS targeted_challenges_submission CASCADE;
DROP TABLE IF EXISTS targeted_challenges_bets CASCADE;
DROP TABLE IF EXISTS targeted_challenges_votes CASCADE;
DROP TABLE IF EXISTS open_challenges CASCADE;
DROP TABLE IF EXISTS targeted_challenges CASCADE;
DROP TABLE IF EXISTS challenges CASCADE;
DROP TABLE IF EXISTS profile CASCADE;
-- the enums
DROP TYPE IF EXISTS c_target_type CASCADE;
DROP TYPE IF EXISTS gender_type CASCADE;
DROP TYPE IF EXISTS cast_direction CASCADE;

CREATE TYPE c_target_type AS ENUM ('targeted', 'open');
CREATE TYPE gender_type AS ENUM ('male', 'female', 'other');
CREATE TYPE cast_direction AS ENUM ('for', 'against');

CREATE TABLE profile (
 profile_id VARCHAR(50) PRIMARY KEY NOT NULL,
 first_name TEXT NOT NULL,
 last_name TEXT NOT NULL,
 coins INT DEFAULT 0 NOT NULL,
 phone_number VARCHAR(15) NOT NULL,
 email VARCHAR(100) NOT NULL UNIQUE,
 date_of_birth DATE NOT NULL,
 gender gender_type NOT NULL
);

CREATE TABLE challenges (
 id SERIAL PRIMARY KEY,
 c_target c_target_type NOT NULL,
 c_description VARCHAR(280) NOT NULL,
 title VARCHAR(64) NOT NULL,
 time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 creator_id VARCHAR(50) REFERENCES profile(profile_id),
 UNIQUE(id, c_target)
);

CREATE TABLE targeted_challenges (
 challenge_id INT PRIMARY KEY,
 c_target c_target_type NOT NULL DEFAULT 'targeted',
 specific_target VARCHAR(50) NOT NULL,
 FOREIGN KEY (challenge_id, c_target) REFERENCES challenges(id, c_target),
 CONSTRAINT check_targeted CHECK (c_target = 'targeted'),
 UNIQUE(challenge_id, c_target),
 -- votes
 votes_for INT NOT NULL DEFAULT 0,
 votes_against INT NOT NULL DEFAULT 0,
 -- bets
 bettors_for INT NOT NULL DEFAULT 0,
 bettors_against INT NOT NULL DEFAULT 0,
 bet_spread_total INT NOT NULL DEFAULT 0,
 bet_spread_for INT NOT NULL DEFAULT 0,
 bet_spread_against INT NOT NULL DEFAULT 0
);

CREATE TABLE targeted_challenges_votes (
 vote_id SERIAL PRIMARY KEY,
 challenge_id INT NOT NULL,
 c_target c_target_type NOT NULL DEFAULT 'targeted',
 vote_direction cast_direction NOT NULL,
 voter_id VARCHAR(50) NOT NULL REFERENCES profile(profile_id),
 FOREIGN KEY (challenge_id, c_target) REFERENCES targeted_challenges(challenge_id, c_target),
 CONSTRAINT check_vote_targeted CHECK (c_target = 'targeted'),
 UNIQUE(voter_id, challenge_id)
);

CREATE TABLE targeted_challenges_bets (
 bet_id SERIAL PRIMARY KEY,
 challenge_id INT NOT NULL,
 c_target c_target_type NOT NULL DEFAULT 'targeted',
 bet_direction cast_direction NOT NULL,
 bet_magnitude INT NOT NULL,
 bettor_id VARCHAR(50) NOT NULL REFERENCES profile(profile_id),
 FOREIGN KEY (challenge_id, c_target) REFERENCES targeted_challenges(challenge_id, c_target),
 CONSTRAINT check_bet_targeted CHECK (c_target = 'targeted'),
 UNIQUE(bettor_id, challenge_id)
);

CREATE TABLE targeted_challenges_submission (
 submission_id SERIAL PRIMARY KEY,
 challenge_id INT NOT NULL,
 c_target c_target_type NOT NULL DEFAULT 'targeted',
 submitter_id VARCHAR(50) NOT NULL REFERENCES profile(profile_id),
 media_url TEXT,
 caption TEXT,
 time_submitted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (challenge_id, c_target) REFERENCES targeted_challenges(challenge_id, c_target),
 CONSTRAINT check_submission_targeted CHECK (c_target = 'targeted'),
 UNIQUE(submitter_id, challenge_id)
);

CREATE TABLE open_challenges (
 challenge_id INT PRIMARY KEY,
 c_target c_target_type NOT NULL DEFAULT 'open',
 submissions INT NOT NULL DEFAULT 0,
 FOREIGN KEY (challenge_id, c_target) REFERENCES challenges(id, c_target),
 CONSTRAINT check_open CHECK (c_target = 'open'),
 UNIQUE(challenge_id, c_target)
);

CREATE TABLE open_challenge_submissions (
 open_submission_id SERIAL PRIMARY KEY,
 challenge_id INT NOT NULL,
 c_target c_target_type NOT NULL DEFAULT 'open',
 user_id VARCHAR(50) NOT NULL REFERENCES profile(profile_id),
 media_url TEXT,
 caption TEXT,
 time_submitted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (challenge_id, c_target) REFERENCES open_challenges(challenge_id, c_target),
 CONSTRAINT check_open_submission CHECK (c_target = 'open'),
 UNIQUE(user_id, challenge_id)
);

-- ============================================================================
-- TRIGGERS FOR AUTOMATIC CACHE UPDATES
-- ============================================================================

-- Function to update vote counts when votes are inserted/deleted
CREATE OR REPLACE FUNCTION update_vote_counts()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Increment the appropriate vote counter
    IF NEW.vote_direction = 'for' THEN
      UPDATE targeted_challenges 
      SET votes_for = votes_for + 1 
      WHERE challenge_id = NEW.challenge_id;
    ELSE
      UPDATE targeted_challenges 
      SET votes_against = votes_against + 1 
      WHERE challenge_id = NEW.challenge_id;
    END IF;
    RETURN NEW;
    
  ELSIF TG_OP = 'DELETE' THEN
    -- Decrement the appropriate vote counter
    IF OLD.vote_direction = 'for' THEN
      UPDATE targeted_challenges 
      SET votes_for = votes_for - 1 
      WHERE challenge_id = OLD.challenge_id;
    ELSE
      UPDATE targeted_challenges 
      SET votes_against = votes_against - 1 
      WHERE challenge_id = OLD.challenge_id;
    END IF;
    RETURN OLD;
    
  ELSIF TG_OP = 'UPDATE' THEN
    -- Handle vote direction change
    IF OLD.vote_direction != NEW.vote_direction THEN
      -- Decrement old direction
      IF OLD.vote_direction = 'for' THEN
        UPDATE targeted_challenges 
        SET votes_for = votes_for - 1 
        WHERE challenge_id = OLD.challenge_id;
      ELSE
        UPDATE targeted_challenges 
        SET votes_against = votes_against - 1 
        WHERE challenge_id = OLD.challenge_id;
      END IF;
      
      -- Increment new direction
      IF NEW.vote_direction = 'for' THEN
        UPDATE targeted_challenges 
        SET votes_for = votes_for + 1 
        WHERE challenge_id = NEW.challenge_id;
      ELSE
        UPDATE targeted_challenges 
        SET votes_against = votes_against + 1 
        WHERE challenge_id = NEW.challenge_id;
      END IF;
    END IF;
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for votes
CREATE TRIGGER trigger_update_vote_counts
AFTER INSERT OR UPDATE OR DELETE ON targeted_challenges_votes
FOR EACH ROW EXECUTE FUNCTION update_vote_counts();

-- Function to update bet counts and spreads when bets are inserted/deleted
CREATE OR REPLACE FUNCTION update_bet_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Update counters and spreads
    IF NEW.bet_direction = 'for' THEN
      UPDATE targeted_challenges 
      SET 
        bettors_for = bettors_for + 1,
        bet_spread_for = bet_spread_for + NEW.bet_magnitude,
        bet_spread_total = bet_spread_total + NEW.bet_magnitude
      WHERE challenge_id = NEW.challenge_id;
    ELSE
      UPDATE targeted_challenges 
      SET 
        bettors_against = bettors_against + 1,
        bet_spread_against = bet_spread_against + NEW.bet_magnitude,
        bet_spread_total = bet_spread_total + NEW.bet_magnitude
      WHERE challenge_id = NEW.challenge_id;
    END IF;
    RETURN NEW;
    
  ELSIF TG_OP = 'DELETE' THEN
    -- Decrement counters and spreads
    IF OLD.bet_direction = 'for' THEN
      UPDATE targeted_challenges 
      SET 
        bettors_for = bettors_for - 1,
        bet_spread_for = bet_spread_for - OLD.bet_magnitude,
        bet_spread_total = bet_spread_total - OLD.bet_magnitude
      WHERE challenge_id = OLD.challenge_id;
    ELSE
      UPDATE targeted_challenges 
      SET 
        bettors_against = bettors_against - 1,
        bet_spread_against = bet_spread_against - OLD.bet_magnitude,
        bet_spread_total = bet_spread_total - OLD.bet_magnitude
      WHERE challenge_id = OLD.challenge_id;
    END IF;
    RETURN OLD;
    
  ELSIF TG_OP = 'UPDATE' THEN
    -- Handle bet changes (direction or magnitude)
    -- First, reverse the old bet
    IF OLD.bet_direction = 'for' THEN
      UPDATE targeted_challenges 
      SET 
        bettors_for = bettors_for - 1,
        bet_spread_for = bet_spread_for - OLD.bet_magnitude,
        bet_spread_total = bet_spread_total - OLD.bet_magnitude
      WHERE challenge_id = OLD.challenge_id;
    ELSE
      UPDATE targeted_challenges 
      SET 
        bettors_against = bettors_against - 1,
        bet_spread_against = bet_spread_against - OLD.bet_magnitude,
        bet_spread_total = bet_spread_total - OLD.bet_magnitude
      WHERE challenge_id = OLD.challenge_id;
    END IF;
    
    -- Then apply the new bet
    IF NEW.bet_direction = 'for' THEN
      UPDATE targeted_challenges 
      SET 
        bettors_for = bettors_for + 1,
        bet_spread_for = bet_spread_for + NEW.bet_magnitude,
        bet_spread_total = bet_spread_total + NEW.bet_magnitude
      WHERE challenge_id = NEW.challenge_id;
    ELSE
      UPDATE targeted_challenges 
      SET 
        bettors_against = bettors_against + 1,
        bet_spread_against = bet_spread_against + NEW.bet_magnitude,
        bet_spread_total = bet_spread_total + NEW.bet_magnitude
      WHERE challenge_id = NEW.challenge_id;
    END IF;
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for bets
CREATE TRIGGER trigger_update_bet_stats
AFTER INSERT OR UPDATE OR DELETE ON targeted_challenges_bets
FOR EACH ROW EXECUTE FUNCTION update_bet_stats();

-- Function to update submission count for open challenges
CREATE OR REPLACE FUNCTION update_submission_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE open_challenges 
    SET submissions = submissions + 1 
    WHERE challenge_id = NEW.challenge_id;
    RETURN NEW;
    
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE open_challenges 
    SET submissions = submissions - 1 
    WHERE challenge_id = OLD.challenge_id;
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for open challenge submissions
CREATE TRIGGER trigger_update_submission_count
AFTER INSERT OR DELETE ON open_challenge_submissions
FOR EACH ROW EXECUTE FUNCTION update_submission_count();