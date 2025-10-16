DROP TABLE IF EXISTS challenge_submissions CASCADE;
DROP TABLE IF EXISTS open_challenges CASCADE;
DROP TABLE IF EXISTS targeted_challenges CASCADE;
DROP TABLE IF EXISTS challenges CASCADE;
DROP TABLE IF EXISTS profile CASCADE;
DROP TYPE IF EXISTS c_target_type CASCADE;
DROP TYPE IF EXISTS gender_type CASCADE;

CREATE TYPE c_target_type AS ENUM ('targeted', 'open');
CREATE TYPE gender_type AS ENUM ('male', 'female', 'other');

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
 creator_id VARCHAR(50) REFERENCES profile(profile_id)
);

CREATE TABLE targeted_challenges (
 challenge_id INT PRIMARY KEY REFERENCES challenges(id),
 value_bet_for INT NOT NULL,
 value_bet_against INT NOT NULL,
 specific_target VARCHAR(50) NOT NULL
);

CREATE TABLE open_challenges (
 challenge_id INT PRIMARY KEY REFERENCES challenges(id),
 submissions INT NOT NULL DEFAULT 0
);

CREATE TABLE challenge_submissions (
 id SERIAL PRIMARY KEY,
 user_id VARCHAR(50) NOT NULL REFERENCES profile(profile_id),
 challenge_id INT NOT NULL REFERENCES challenges(id),
 submission_data TEXT,
 time_submitted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(user_id, challenge_id)
);