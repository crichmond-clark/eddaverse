CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT verificationToken_identifier_token_pk PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
ALTER TABLE "scene" DROP CONSTRAINT "scene_story_story_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scene" ADD CONSTRAINT "scene_story_story_id_fk" FOREIGN KEY ("story") REFERENCES "story"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "refresh_token" text;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "access_token" text;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "expires_at" text;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "token_type" text;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "scope" text;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "id_token" text;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN  "session_state" text;--> statement-breakpoint
ALTER TABLE "scene" ADD COLUMN  "decisions" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
