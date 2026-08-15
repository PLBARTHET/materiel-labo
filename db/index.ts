import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
export async function getDb(){const {env}=await import("cloudflare:workers");if(!env.DB)throw new Error("D1 DB indisponible");return drizzle(env.DB,{schema})}
