import type { MetadataRoute } from "next";
import { funds } from "@/lib/funds";
import { articles } from "@/lib/editorial";
export default function sitemap():MetadataRoute.Sitemap{
 const base=process.env.NEXT_PUBLIC_SITE_URL;
 if(!base)return [];
 return ["","/about","/strategies","/insights","/login","/disclosures",...funds.map(f=>`/strategies/${f.slug}`),...articles.map(a=>`/insights/${a.slug}`)].map(path=>({url:`${base.replace(/\/$/,"")}${path}`,lastModified:"2026-10-21"}));
}
