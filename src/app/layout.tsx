import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "徐应鹏 · UX Designer",
  description:
    "专注企业级复杂产品、设计系统与 AI 协作工作流的 UX 设计师。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="dark">
      <body>{children}</body>
    </html>
  );
}
