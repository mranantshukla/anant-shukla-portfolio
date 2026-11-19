import Image from "next/image";
import Link from "next/link";
import {
  experience,
  leadership,
  email,
  github,
  projects,
} from "../lib/portfolio";
import { Terrain } from "../components/Terrain";
import { Skills } from "../components/Skills";
import { Cover } from "../components/Cover";
import { Crowd } from "../components/Crowd";
import { Contact } from "../components/Contact";

function Timeline({ rows }: { rows: string[][] }) {
  return (
    <div className="timeline">
      {rows.map(([date, title, org, summary]) => (
        <article key={org}>
          <small>{date}</small>
          <h3>{title}</h3>
          <strong>{org}</strong>
          <p>{summary}</p>
        </article>
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <main id="main">
      <section id="home" className="hero">
        <Terrain />
        <div className="hero-center">
          <p className="eyebrow">Anant Shukla · IIT Roorkee</p>
          <h1>
            <span className="brace">&lt;</span> Applied AI
            <br />
            Engineer <span className="brace">/&gt;</span>
          </h1>
          <a className="portrait" href="#about" aria-label="Meet Anant Shukla">
            <Image
              priority
              src="/anant.jpg"
              alt="Anant Shukla"
              width={1068}
              height={1068}
              sizes="(max-width: 600px) 180px, 260px"
            />
          </a>
        </div>
        <div className="hero-foot">
          <strong>©2026</strong>
          <a href="#about">Explore ↓</a>
          <span>AI / Analytics / Strategy</span>
        </div>
      </section>
      <section id="about" className="section split">
        <div>
          <p className="eyebrow">About & education</p>
          <h2>
            Hi, I’m
            <br />
            <em>Anant.</em>
          </h2>
        </div>
        <div className="bio">
          <p className="lead">
            I study civil engineering at IIT Roorkee. A bicycle camera led me
            into computer vision. Running hostel operations taught me to ask who
            will use what I build.
          </p>
          <p>
            I work on applied AI, customer analytics and operational decisions.
            My projects range from tracing a transformer in C++ to modelling how
            people choose a meal.
          </p>
          <div className="credential">
            <strong>Indian Institute of Technology Roorkee</strong>
            <span>B.Tech. Civil Engineering · Class of 2027</span>
          </div>
          <a className="under" href="#projects">
            Explore selected work ↓
          </a>
        </div>
      </section>
      <section id="skills" className="section">
        <p className="eyebrow">Skills</p>
        <h2>Tech stack.</h2>
        <Skills />
      </section>
      <section id="projects" className="section">
        <div className="spread">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Featured projects.</h2>
          </div>
          <a className="under" href={github}>
            GitHub ↗
          </a>
        </div>
        <div className="folders">
          {projects.map((p) => (
            <details
              key={p.slug}
              className="folder"
              style={{ "--folder": p.color } as React.CSSProperties}
            >
              <summary>
                <span className="tab-shape" />
                <small>{p.discipline}</small>
                <Cover slug={p.slug} color={p.color} />
                <strong>{p.title}</strong>
                <span className="folder-action">Open folder ＋</span>
              </summary>
              <div className="folder-detail">
                <p>{p.subtitle}</p>
                <Link href={"/work/" + p.slug}>Read case study ↗</Link>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section id="experience" className="section split">
        <div>
          <p className="eyebrow">Industry</p>
          <h2>Experience.</h2>
        </div>
        <Timeline rows={experience} />
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">IIT Roorkee</p>
          <h2>
            Campus
            <br />
            leadership.
          </h2>
        </div>
        <Timeline rows={leadership} />
      </section>
      <section className="section">
        <p className="eyebrow">Achievements & impact</p>
        <h2>Beyond the lab.</h2>
        <div className="stats">
          {[
            ["8,000+", "residents served by hostel operations"],
            [
              "1,500+",
              "volunteers mobilised for the Upper Ganga Canal clean-up",
            ],
            ["Top 3", "Bring Your Own Projects 2026 · Consulting & Analytics"],
          ].map(([value, label]) => (
            <article key={value}>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
        <p>
          IITR Heritage Excellence Award, 2024 · First place, Policython
          Challenge, 2024
        </p>
      </section>
      <section id="journal" className="section">
        <p className="eyebrow">Technical journal & research</p>
        <h2>Field notes.</h2>
        <Link className="journal-row" href="/journal/cyclist-position">
          <small>WCTR 2026 · Research</small>
          <strong>How far is a cyclist from the lane edge?</strong>
          <span>Read ↗</span>
        </Link>
        <Link className="journal-row" href="/journal/tracing">
          <small>Engineering note · AI systems</small>
          <strong>What a forward pass leaves behind</strong>
          <span>Read ↗</span>
        </Link>
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">Recommendations</p>
          <h2>References.</h2>
        </div>
        <div>
          <p className="lead">Academic references at IIT Roorkee</p>
          <p>
            Prof. K.S. Hari Prasad · Civil Engineering
            <br />
            Prof. Bhanu Prakash Vellanki · Environmental Engineering
          </p>
          <a
            className="under"
            href={"mailto:" + email + "?subject=Academic%20reference%20request"}
          >
            Request an introduction ↗
          </a>
        </div>
      </section>
      <Contact />
      <footer>
        <div className="spread section footer-name">
          <h2>Anant.</h2>
          <a href="#home">Back to top ↑</a>
        </div>
        <Crowd />
      </footer>
    </main>
  );
}
