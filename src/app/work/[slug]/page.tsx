// 项目详情页 — UI 开发中，当前为内容读取验证版本

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWorkBySlug, getWorkSlugs } from "@/lib/mdx";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

// 静态路由生成
export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

// 页面 metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  return {
    title: project ? `${project.title} · 徐应鹏` : "Project",
    description: project?.subtitle,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const result = getWorkBySlug(slug);

  // MDX 内容不存在时，从静态数据渲染基础版本
  const project = projects.find((p) => p.id === slug);
  if (!project && !result) notFound();

  const meta = result?.meta ?? {
    id: slug,
    title: project?.title ?? "",
    subtitle: project?.subtitle ?? "",
    role: project?.role ?? "",
    year: project?.year ?? "",
    tags: project?.tags ?? [],
  };

  return (
    <article>
      {/* Header */}
      <header>
        <a href="/">← 返回首页</a>
        <h1>{meta.title}</h1>
        <p>{meta.subtitle}</p>
        <p>{meta.role} · {meta.year}</p>
        <ul>
          {meta.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </header>

      {/* MDX 内容（有则渲染，无则显示占位） */}
      <section>
        {result?.content ? (
          <MDXRemote source={result.content} />
        ) : (
          <p>内容撰写中…</p>
        )}
      </section>

      {/* 导航 */}
      <footer>
        <a href="/#work">← 所有项目</a>
      </footer>
    </article>
  );
}
