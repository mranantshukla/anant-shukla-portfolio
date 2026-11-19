import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/portfolio";
import { Cover } from "../../../components/Cover";
type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = () =>
  projects.map(({ slug }) => ({ slug }));
async function projectFor({ params }: Props) {
  const { slug } = await params;
  return projects.find((p) => p.slug === slug) ?? notFound();
}
export async function generateMetadata(props: Props) {
  const p = await projectFor(props);
  return { title: p.title, description: p.subtitle };
}
export default async function CaseStudy(props: Props) {
  const p = await projectFor(props);
  return (
    <main id="main" className="reading">
      <Link href="/#projects">← All projects</Link>
      <p className="eyebrow">{p.discipline} / Case study</p>
      <h1>{p.title}</h1>
      <p className="lead">{p.subtitle}</p>
      <Cover slug={p.slug} color={p.color} />
      {[
        ["The question", p.problem],
        ["Approach", p.method],
        ["Outcome", p.outcome],
      ].map(([heading, body]) => (
        <section key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
      <div className="tags">
        {p.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="actions">
        <a href={p.source}>
          {p.source.startsWith("/") ? "Download résumé" : "View repository"} ↗
        </a>
        {p.demo && <a href={p.demo}>Open prototype ↗</a>}
      </div>
    </main>
  );
}
