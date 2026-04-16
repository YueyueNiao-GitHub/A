import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface WorkMeta {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tags: string[];
  coverImage?: string;
}

export interface WritingMeta {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export function getWorkSlugs(): string[] {
  const dir = path.join(contentDir, "work");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getWorkBySlug(slug: string): {
  meta: WorkMeta;
  content: string;
} | null {
  const filePath = path.join(contentDir, "work", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      id: slug,
      title: data.title ?? "",
      subtitle: data.subtitle ?? "",
      role: data.role ?? "",
      year: data.year ?? "",
      tags: data.tags ?? [],
      coverImage: data.coverImage,
    },
    content,
  };
}

export function getWritingSlugs(): string[] {
  const dir = path.join(contentDir, "writing");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getWritingBySlug(slug: string): {
  meta: WritingMeta;
  content: string;
} | null {
  const filePath = path.join(contentDir, "writing", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      id: slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
    },
    content,
  };
}
