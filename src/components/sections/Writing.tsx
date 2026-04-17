import Link from "next/link";
import { writingItems } from "@/data/writing";

export default function Writing() {
  return (
    <section
      id="writing"
      className="max-w-screen-2xl mx-auto border-x hairline-border border-[#333333] py-24 px-8"
    >
      <div className="flex justify-between items-end mb-16 border-b hairline-border border-[#333333] pb-8">
        <div>
          <span className="mono text-[10px] text-primary uppercase tracking-[0.3em]">
            SEC_04 / LOGS
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-2">Writing</h2>
        </div>
        <p className="text-neutral-500 text-right max-w-xs">
          关于复杂系统、设计系统与 AI 的一些思考
        </p>
      </div>

      <div className="space-y-0">
        {writingItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b hairline-border border-[#333333] hover:bg-white/5 transition-all group px-4"
          >
            <div className="flex items-center gap-6">
              <span className="mono text-xs text-neutral-600">{item.date}</span>
              <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                {item.title}
              </h4>
            </div>
            <span className="material-symbols-outlined text-neutral-700 group-hover:text-white group-hover:translate-x-2 transition-all">
              arrow_forward
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
