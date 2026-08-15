// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
export {};
import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const items = sqliteTable("items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: real("price").notNull(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
});

export const reports = sqliteTable("reports", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  date: text("date").notNull().default(sql`CURRENT_TIMESTAMP`),
  classroom: text("classroom").notNull(), lab: text("lab").notNull(),
  station: text("station").notNull(), itemId: integer("item_id").notNull(),
  itemName: text("item_name").notNull(), unitPrice: real("unit_price").notNull(),
  quantity: integer("quantity").notNull(), cause: text("cause").notNull().default(""),
  comment: text("comment").notNull().default(""),
});

export const stocks = sqliteTable("stocks", {
  id: integer("id").primaryKey({ autoIncrement: true }), lab: text("lab").notNull(),
  itemId: integer("item_id").notNull(), quantity: integer("quantity").notNull().default(0),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(true),
  threshold: integer("threshold").notNull().default(5), updated: text("updated").notNull(),
  lastOrder: text("last_order").notNull().default(""), lastOrderQty: integer("last_order_qty").notNull().default(0),
  lastOrderPrice: real("last_order_price").notNull().default(0),
}, t => [uniqueIndex("stocks_lab_item_unique").on(t.lab, t.itemId)]);

export const settings = sqliteTable("settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const labs = sqliteTable("labs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const classes = sqliteTable("classes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});
