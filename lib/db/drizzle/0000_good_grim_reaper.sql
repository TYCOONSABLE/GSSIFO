CREATE TABLE "banner" (
	"id" integer PRIMARY KEY DEFAULT 1 NOT NULL,
	"text" text NOT NULL,
	"link_text" text NOT NULL,
	"link_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" text PRIMARY KEY NOT NULL,
	"date" text NOT NULL,
	"month" text NOT NULL,
	"title" text NOT NULL,
	"loc" text NOT NULL,
	"desc" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hero_slides" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_url" text NOT NULL,
	"display_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "news" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"img" text NOT NULL,
	"date" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "opportunities" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"type" text NOT NULL,
	"commitment" text NOT NULL,
	"desc" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "partners" (
	"id" text PRIMARY KEY NOT NULL,
	"org_name" text NOT NULL,
	"contact_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"partner_type" text NOT NULL,
	"focus_area" text NOT NULL,
	"proposal" text NOT NULL,
	"date" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "positions" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"category" text NOT NULL,
	"location" text NOT NULL,
	"type" text NOT NULL,
	"desc" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stories" (
	"id" text PRIMARY KEY NOT NULL,
	"img" text NOT NULL,
	"tag" text NOT NULL,
	"date" text NOT NULL,
	"title" text NOT NULL,
	"desc" text NOT NULL,
	"author" text NOT NULL,
	"read_time" text NOT NULL,
	"content" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE "volunteers" (
	"id" text PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"opportunity" text NOT NULL,
	"availability" text NOT NULL,
	"message" text NOT NULL,
	"date" text NOT NULL
);
