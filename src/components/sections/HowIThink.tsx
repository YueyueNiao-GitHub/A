const principles = [
  { id: "P_01", text: "复杂系统优先解决结构问题，而不是视觉细节" },
  { id: "P_02", text: "设计是功能的延伸，工程是设计的边界" },
  { id: "P_03", text: "一致性优于新颖性，可预测性优于惊喜感" },
  { id: "P_04", text: "抽象程度决定了系统的生命力" },
  { id: "P_05", text: "好的交互应该像数学公式一样严谨" },
];

export default function HowIThink() {
  return (
    <section
      id="how-i-think"
      className="max-w-screen-2xl mx-auto border-x hairline-border border-[#333333] py-24 px-8 bg-surface-container-lowest"
    >
      <span className="mono text-[10px] text-primary uppercase tracking-[0.3em] block mb-12 text-center">
        SEC_03 / PRINCIPLES
      </span>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#333333] border hairline-border border-[#333333]">
        {principles.map((p) => (
          <div
            key={p.id}
            className="bg-black p-8 aspect-square flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
          >
            <span className="mono text-[10px] text-neutral-600">{p.id}</span>
            <p className="font-bold text-lg leading-snug">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
