ALTER TABLE "scene" DROP CONSTRAINT "scene_story_story_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scene" ADD CONSTRAINT "scene_story_story_id_fk" FOREIGN KEY ("story") REFERENCES "story"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "scene" DROP COLUMN IF EXISTS "decisions";