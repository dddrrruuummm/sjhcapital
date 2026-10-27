import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {default:"SJH Capital | Principled Portfolio Management",template:"%s | SJH Capital"},
  description:"Hong Kong-based investment firm serving US and international investors with disciplined, research-driven strategies across equities, fixed income and alternatives.",
  robots:{index:false,follow:false},
  openGraph:{title:"SJH Capital | Principled Portfolio Management",description:"Principled portfolio management for the long term.",type:"website",locale:"en_US"},
  icons:{icon:"/icon.svg"},
};
export const viewport: Viewport = {themeColor:"#0B1F3A"};
const schema = {"@context":"https://schema.org","@type":"WebSite",name:"SJH Capital",inLanguage:"en-US",description:"Fictional asset management website design demonstration",publisher:{"@type":"Organization",name:"SJH Capital Ltd",description:"Fictional organization for a website design demonstration"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></body></html>}
