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
 CONSTRAINT check_targeted CHECK (c_target = 'targeted')
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
 CONSTRAINT check_open CHECK (c_target = 'open')
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