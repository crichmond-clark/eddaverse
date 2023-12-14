ALTER TABLE "characters" ALTER COLUMN "traits" TYPE json USING traits::json;--> statement-breakpoint
ALTER TABLE "characters" ALTER COLUMN "traits" SET DEFAULT '[]'::json;--> statement-breakpoint
ALTER TABLE "characters" DROP COLUMN IF EXISTS "dialogueLines";