import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { LoginForm } from "@/components/login-form";
export const metadata: Metadata={title:"Client Portal",description:"Client portal sign-in demonstration for SJH Capital."};
export default function Login(){return <section className="login-section"><div className="container login-grid"><div className="login-copy"><p className="eyebrow">SJH Capital · Client Portal</p><h1>Your portfolio.<br/>A longer perspective.</h1><p>For our private and institutional clients in Hong Kong, the United States and beyond.</p><div className="login-contact"><span>Need assistance accessing your account?</span><a className="text-link" href="mailto:contact@sjh.capital">contact@sjh.capital<ArrowUpRight size={15}/></a></div></div><LoginForm/></div></section>}
