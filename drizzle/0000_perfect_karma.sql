CREATE TABLE "words" (
	"id" serial PRIMARY KEY NOT NULL,
	"word" text NOT NULL,
	CONSTRAINT "words_word_unique" UNIQUE("word")
);
