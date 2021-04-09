CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (1000) NOT NULL,
    "favorite" BOOLEAN DEFAULT FALSE
);

INSERT INTO "favorites" ("url", "favorite")
VALUES ('https://media3.giphy.com/media/aB7gLRBRg4BHSBPKUE/giphy.gif?cid=ee7f61254lny79jnonlcwvedcfg99upzlraw1voorn645418&rid=giphy.gif', true );

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
