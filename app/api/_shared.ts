import { asc, eq } from "drizzle-orm";
import { getDb } from "../../db";
import { classes, labs, settings } from "../../db/schema";

export const DEFAULT_LABS=["Laboratoire de synthèse E-107","Laboratoire d'analyse E-104","Laboratoire de formulation T-131","Atelier de Génie chimique"];
export const DEFAULT_CLASSES=["S1MC Groupe 1","S1MC Groupe 2","S2MC Groupe 1","S2MC Groupe 2","T STL","1 STL"];
export const APP_VERSION="1.1.1";

export async function digest(value:string){const h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value));return Array.from(new Uint8Array(h)).map(x=>x.toString(16).padStart(2,"0")).join("")}
export async function isStaff(req:Request){const cookie=req.headers.get("cookie")||"";const match=cookie.match(/(?:^|;\s*)vl_staff=([a-f0-9]{64})/);if(!match)return false;const db=await getDb();const [stored]=await db.select().from(settings).where(eq(settings.key,"staff_code_hash")).limit(1);if(stored)return match[1]===stored.value;const {env}=await import("cloudflare:workers");return Boolean(env.ADMIN_CODE)&&match[1]===await digest(env.ADMIN_CODE)}
export async function ensureConfig(){const db=await getDb();const currentLabs=await db.select().from(labs).limit(1);if(!currentLabs.length)await db.insert(labs).values(DEFAULT_LABS.map((name,sortOrder)=>({name,sortOrder})));const currentClasses=await db.select().from(classes).limit(1);if(!currentClasses.length)await db.insert(classes).values(DEFAULT_CLASSES.map((name,sortOrder)=>({name,sortOrder})));const defaults={institution:"Mon établissement",academic_year:"2026-2027",setup_complete:"false",app_version:APP_VERSION};for(const [key,value] of Object.entries(defaults)){await db.insert(settings).values({key,value}).onConflictDoNothing()}}
export async function publicConfig(){await ensureConfig();const db=await getDb();const rows=await db.select().from(settings);const values=Object.fromEntries(rows.map(x=>[x.key,x.value]));return {institution:values.institution,academicYear:values.academic_year,setupComplete:values.setup_complete==="true",appVersion:APP_VERSION,labs:(await db.select().from(labs).where(eq(labs.active,true)).orderBy(asc(labs.sortOrder))).map(x=>x.name),classes:(await db.select().from(classes).where(eq(classes.active,true)).orderBy(asc(classes.sortOrder))).map(x=>x.name)}}
