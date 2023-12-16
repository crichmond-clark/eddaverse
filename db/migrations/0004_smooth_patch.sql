CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT account_provider_providerAccountId_pk PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
ALTER TABLE "characters" RENAME TO "character";--> statement-breakpoint
ALTER TABLE "decisions" RENAME TO "decision";--> statement-breakpoint
ALTER TABLE "scenes" RENAME TO "scene";--> statement-breakpoint
ALTER TABLE "stories" RENAME TO "story";--> statement-breakpoint
ALTER TABLE "users" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "scenes_to_characters" DROP CONSTRAINT "scenes_to_characters_scene_id_scenes_id_fk";
--> statement-breakpoint
ALTER TABLE "scenes_to_characters" DROP CONSTRAINT "scenes_to_characters_character_id_characters_id_fk";
--> statement-breakpoint
ALTER TABLE "stories_to_characters" DROP CONSTRAINT "stories_to_characters_story_id_stories_id_fk";
--> statement-breakpoint
ALTER TABLE "stories_to_characters" DROP CONSTRAINT "stories_to_characters_character_id_characters_id_fk";
--> statement-breakpoint
ALTER TABLE "decision" DROP CONSTRAINT "decisions_scene_scenes_id_fk";
--> statement-breakpoint
ALTER TABLE "scene" DROP CONSTRAINT "scenes_story_stories_id_fk";
--> statement-breakpoint
ALTER TABLE "story" DROP CONSTRAINT "stories_author_users_id_fk";
--> statement-breakpoint
ALTER TABLE "story" ALTER COLUMN "author" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "emailVerified" timestamp;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "image" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scenes_to_characters" ADD CONSTRAINT "scenes_to_characters_scene_id_scene_id_fk" FOREIGN KEY ("scene_id") REFERENCES "scene"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scenes_to_characters" ADD CONSTRAINT "scenes_to_characters_character_id_character_id_fk" FOREIGN KEY ("character_id") REFERENCES "character"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stories_to_characters" ADD CONSTRAINT "stories_to_characters_story_id_story_id_fk" FOREIGN KEY ("story_id") REFERENCES "story"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stories_to_characters" ADD CONSTRAINT "stories_to_characters_character_id_character_id_fk" FOREIGN KEY ("character_id") REFERENCES "character"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "decision" ADD CONSTRAINT "decision_scene_scene_id_fk" FOREIGN KEY ("scene") REFERENCES "scene"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scene" ADD CONSTRAINT "scene_story_story_id_fk" FOREIGN KEY ("story") REFERENCES "story"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "story" ADD CONSTRAINT "story_author_user_id_fk" FOREIGN KEY ("author") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
