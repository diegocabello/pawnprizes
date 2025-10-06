DROP TABLE IF EXISTS open_challenges CASCADE;
DROP TABLE IF EXISTS targeted_challenges CASCADE;
DROP TABLE IF EXISTS challenges CASCADE;
DROP TYPE IF EXISTS c_target_type CASCADE;

CREATE TYPE c_target_type AS ENUM ('targeted', 'open');

CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    c_target c_target_type NOT NULL,
    c_description VARCHAR(280) NOT NULL,
    title VARCHAR(64) NOT NULL,
    time_created TIMESTAMP NOT NULL
);

CREATE TABLE targeted_challenges (
    challenge_id INT PRIMARY KEY REFERENCES challenges(id),
    value_bet_for INT NOT NULL,
    value_bet_against INT NOT NULL,
    specific_target VARCHAR(50) NOT NULL
);

CREATE TABLE open_challenges (
    challenge_id INT PRIMARY KEY REFERENCES challenges(id),
    submissions INT NOT NULL
);