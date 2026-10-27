import type { Metadata } from "next";
import Link from "next/link";
import { aboutStory, firmFacts, milestones, team, values } from "@/lib/editorial";

export const metadata: Metadata = {
  title: "About SJH Capital",
  description: "Founded in Hong Kong in October 2013, SJH Capital brings disciplined portfolio management to private and institutional clients through offices in Hong Kong and New York.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our firm</p>
          <h1>Built on discipline.<br />Invested for the long term.</h1>
          <p className="page-intro">SJH Capital Ltd · Hong Kong & New York · Established 2013</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout about-story">
          <div>
            <p className="eyebrow">An independent beginning</p>
            <h2>A firm built around<br />the client.</h2>
            <div className="prose">{aboutStory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <aside className="facts-panel" aria-labelledby="firm-facts-title">
            <p className="eyebrow">At a glance</p>
            <h3 id="firm-facts-title">SJH Capital Ltd</h3>
            <dl className="facts-grid">
              {firmFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">What guides us</p><h2>Principles in practice.</h2></div></div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span className="value-number" aria-hidden="true">0{index + 1}</span>
                <h3>{value.title}</h3><p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Our people</p><h2>Experience. Shared conviction.</h2></div><p className="subtle">28 professionals.<br />14 in investment roles.</p></div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name}>
                <div className="monogram" aria-hidden="true">{person.monogram}</div>
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                {person.credentials && <p className="team-credentials">{person.credentials}</p>}
                <p className="team-bio">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section milestones-section">
        <div className="container split-layout">
          <div><p className="eyebrow">Our history</p><h2>Thirteen years<br />of steady progress.</h2><Link className="text-link" href="/strategies">Explore our strategies <span aria-hidden="true">↗</span></Link></div>
          <ol className="timeline">
            {milestones.map((milestone) => <li className="timeline-item" key={milestone.date}><h3>{milestone.date}</h3><p>{milestone.body}</p></li>)}
          </ol>
        </div>
      </section>
    </>
  );
}
