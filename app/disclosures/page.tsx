import type { Metadata } from "next";
import { disclosures } from "@/lib/editorial";

export const metadata: Metadata = {
  title: "Disclosures & Privacy",
  description: "Licensing, registration, important investment disclosures and privacy information for SJH Capital Ltd.",
};

export default function DisclosuresPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal & regulatory</p>
          <h1>Disclosures & privacy.</h1>
          <p className="page-intro">Licensing, important disclosures and how we handle your information.</p>
        </div>
      </section>
      <div className="container section legal-layout">
        <nav className="legal-nav" aria-label="Legal sections">
          <p className="eyebrow">On this page</p>
          {disclosures.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}<span aria-hidden="true">↗</span></a>)}
        </nav>
        <div className="legal-content prose">
          {disclosures.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <p className="eyebrow">0{index + 1}</p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
