import Link from "next/link";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const [kaleido, designSystem, aiWorkflow] = projects;

  return (
    <section
      id="selected-work"
      className="max-w-screen-2xl mx-auto border-x hairline-border border-[#333333] py-24 px-8"
    >
      {/* 标题行 */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="mono text-[10px] text-primary uppercase tracking-[0.3em]">
            SEC_01 / PROJECTS
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-2">Selected Work</h2>
          <p className="text-neutral-500 mt-2">代表性项目，重点体现复杂系统与结构设计能力</p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#333333] border hairline-border border-[#333333]">

        {/* Card 1 — Kaleido (8 cols) */}
        <Link
          href={kaleido.href}
          className="md:col-span-8 bg-black p-8 group relative overflow-hidden block hover:bg-white/[0.02] transition-colors"
        >
          <div className="absolute top-4 right-4 mono text-[10px] text-neutral-700">REF_KALEIDO_01</div>
          <div className="flex flex-col h-full">
            <div className="mb-auto">
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {kaleido.title} 交互框架升级
              </h3>
              <p className="text-neutral-400 text-lg max-w-xl mb-6">
                重新设计低代码平台的整体交互结构。这是一个典型的复杂系统问题，核心在结构重构而不是界面优化。
              </p>
              <div className="grid grid-cols-2 gap-8 mono text-[11px] mb-8">
                <div>
                  <span className="text-neutral-600 block">ROLE</span>
                  <span className="text-on-surface">{kaleido.role}</span>
                </div>
                <div>
                  <span className="text-neutral-600 block">SCOPE</span>
                  <span className="text-on-surface">信息架构 / 交互模型 / 多面板协同</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {kaleido.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-surface-container-low border hairline-border border-[#333333] text-[10px] mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Card 2 — Design System (4 cols) */}
        <Link
          href={designSystem.href}
          className="md:col-span-4 bg-black p-8 group relative flex flex-col border-l hairline-border border-[#333333] hover:bg-white/[0.02] transition-colors"
        >
          <div className="absolute top-4 right-4 mono text-[10px] text-neutral-700">REF_DS_02</div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
            {designSystem.title}
          </h3>
          <p className="text-neutral-500 text-sm mb-6 flex-grow">
            从视觉规范扩展到 token、组件与工程实现的映射。体现从界面设计走向系统抽象与工程对齐的能力。
          </p>
          <div className="space-y-4">
            <div className="mono text-[10px]">
              <span className="text-neutral-600 block">TAGS</span>
              <span className="text-on-surface">{designSystem.tags.join(", ")}</span>
            </div>
            {/* 占位图 */}
            <div className="w-full aspect-video bg-surface-container border hairline-border border-[#333333] flex items-center justify-center">
              <span className="mono text-[10px] text-neutral-700">COVER_IMAGE</span>
            </div>
          </div>
        </Link>

        {/* Card 3 — AI Workflow (12 cols) */}
        <Link
          href={aiWorkflow.href}
          className="md:col-span-12 bg-black p-8 group relative border-t hairline-border border-[#333333] hover:bg-white/[0.02] transition-colors block"
        >
          <div className="absolute top-4 right-4 mono text-[10px] text-neutral-700">REF_AI_03</div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                AI × 设计工作流探索
              </h3>
              <p className="text-neutral-400 mb-6">
                将 AI 引入设计流程。体现对设计未来形态的判断，而不是仅优化当前流程。
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {aiWorkflow.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-surface-container-low border hairline-border border-[#333333] text-[10px] mono uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mono text-[10px] text-on-surface underline underline-offset-4 group-hover:text-primary transition-colors">
                VIEW_CASE_STUDY →
              </span>
            </div>
            <div className="hairline-border border-[#333333] bg-surface-container-lowest p-1 aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              <div className="w-full h-full border hairline-border border-[#333333] flex items-center justify-center">
                <span className="mono text-[10px] text-neutral-700">COVER_IMAGE</span>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
