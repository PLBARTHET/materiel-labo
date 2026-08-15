CREATE TABLE `items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`price` real NOT NULL,
	`active` integer DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE `reports` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`classroom` text NOT NULL,
	`lab` text NOT NULL,
	`station` text NOT NULL,
	`item_id` integer NOT NULL,
	`item_name` text NOT NULL,
	`unit_price` real NOT NULL,
	`quantity` integer NOT NULL,
	`cause` text DEFAULT '' NOT NULL,
	`comment` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`lab` text NOT NULL,
	`item_id` integer NOT NULL,
	`quantity` integer DEFAULT 0 NOT NULL,
	`threshold` integer DEFAULT 5 NOT NULL,
	`updated` text NOT NULL,
	`last_order` text DEFAULT '' NOT NULL,
	`last_order_qty` integer DEFAULT 0 NOT NULL,
	`last_order_price` real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `stocks_lab_item_unique` ON `stocks` (`lab`,`item_id`);