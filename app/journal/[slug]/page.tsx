import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "../../../lib/notes";
type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => notes.map(({ slug }) => ({ slug }));
async function noteFor({ params }: Props) {
  const { slug } = await params;
  return notes.find((n) => n.slug === slug) ?? notFound();
}
export async function generateMetadata(props: Props) {
  const n = await noteFor(props);
  return { title: n.title, description: n.intro };
}
export default async function Note(props: Props) {
  const n = await noteFor(props);
  return (
    <main className="reading" id="main">
      <Link href="/#journal">← All notes</Link>
      <p className="eyebrow">{n.label}</p>
      <h1>{n.title}</h1>
      <p className="lead">{n.intro}</p>
      {n.sections.map(([title, body]) => (
        <section key={title}>
          <h2>{title}</h2>
          <p>{body}</p>
        </section>
      ))}
      <Link className="under" href={"/work/" + n.project}>
        Read the project case study ↗
      </Link>
    </main>
  );
}
