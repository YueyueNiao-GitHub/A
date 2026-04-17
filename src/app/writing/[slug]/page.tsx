// 文章详情页 — 预留，内容待填充

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWritingBySlug, getWritingSlugs } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const result = getWritingBySlug(slug);
  return {
    title: result ? `${result.meta.title} · 徐应鹏` : "Writing",
    description: result?.meta.excerpt,
  };
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const result = getWritingBySlug(slug);

  if (!result) notFound();

  return (
    <article>
      <header>
        <a href="/">← 返回首页</a>
        <h1>{result.meta.title}</h1>
        <p>{result.meta.excerpt}</p>
        <p>{result.meta.date}</p>
      </header>

      <section>
        <MDXRemote source={result.content} />
      </section>

      <footer>
        <a href="/#writing">← 所有文章</a>
      </footer>
    </article>
  );
}
