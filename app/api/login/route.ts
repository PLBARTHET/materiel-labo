import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { settings } from "../../../db/schema";
import { digest, ensureConfig } from "../_shared";
export async function POST(req:Request){await ensureConfig();const {env}=await import("cloudflare:workers"),{code}=await req.json() as {code?:string},db=await getDb(),[stored]=await db.select().from(settings).where(eq(settings.key,"staff_code_hash")).limit(1),hash=await digest(code||"");if(stored?hash!==stored.value:!env.ADMIN_CODE||code!==env.ADMIN_CODE)return Response.json({error:"Code incorrect"},{status:401});return new Response(JSON.stringify({ok:true}),{headers:{"content-type":"application/json","set-cookie":`vl_staff=${hash}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`}})}
