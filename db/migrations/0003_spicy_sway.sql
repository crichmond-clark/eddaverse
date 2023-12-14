ALTER TABLE "scenes" RENAME COLUMN "words" TO "narrativeText";--> statement-breakpoint
ALTER TABLE "scenes" RENAME COLUMN "order" TO "decisions";--> statement-breakpoint
ALTER TABLE "scenes" ALTER COLUMN "narrativeText" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "scenes" ALTER COLUMN "narrativeText" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "scenes" ALTER COLUMN "decisions" TYPE json USING json_build_array(decisions);;--> statement-breakpoint
ALTER TABLE "scenes" ALTER COLUMN "decisions" SET DEFAULT '[]'::json;