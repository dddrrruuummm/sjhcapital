"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { site } from "@/lib/site";
const links = [["/", "Home"], ["/about", "About"], ["/strategies", "Strategies & Funds"], ["/insights", "Insights"]];
export function Header() {
  const pathname = usePathname();
  const [open,setOpen] = useState(false);
  return <><div className="utility"><div className="container utility-inner"><span>{site.license}</span><Link href="/login">Client Login <ArrowUpRight size={12}/></Link></div></div><header className="header"><div className="container header-inner"><Link className="brand-link" href="/" aria-label="SJH Capital home" onClick={()=>setOpen(false)}><Brand/></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([href,label])=><Link href={href} key={href} aria-current={(href==="/"?pathname===href:pathname.startsWith(href))?"page":undefined}>{label}</Link>)}</nav><Link className="button button-gold portal-button" href="/login">Client Portal <ArrowUpRight size={15}/></Link><button className="menu-toggle" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">{[...links,["/login","Client Portal"],["/disclosures","Disclosures"]].map(([href,label])=><Link onClick={()=>setOpen(false)} href={href} key={href}>{label}<ArrowUpRight size={16}/></Link>)}</nav>}</header></>;
}
