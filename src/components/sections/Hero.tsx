export default function Hero() {
  return (
    <section className="min-h-[921px] px-8 flex flex-col justify-center max-w-screen-2xl mx-auto border-x hairline-border border-[#333333]">
      {/* 状态标签 */}
      <div className="mb-6 inline-flex items-center gap-2">
        <span className="mono text-[10px] text-primary uppercase tracking-[0.2em] px-2 py-1 border border-primary/30">
          Status: Active_Operational
        </span>
        <span className="mono text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
          Design Engineer for Complex Systems
        </span>
      </div>

      {/* 主标题 */}
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 max-w-5xl">
        专注复杂系统的结构，<br />
        而不只是界面设计
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-end">
        {/* 左侧：描述 + CTA */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl">
            面向企业后台与平台型产品，处理信息密度、认知成本与工程约束之间的平衡。
            从信息结构到交互模型，再到设计系统与实现方式，构建完整且可落地的产品体验。
          </p>
          <p className="text-base text-neutral-500 max-w-xl">
            关注复杂系统、低代码平台与设计系统，并探索 AI 在设计与实现流程中的实际应用。
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#selected-work"
              className="px-8 py-4 bg-white text-black font-bold uppercase text-sm tracking-widest hover:bg-primary transition-all"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border hairline-border text-white font-bold uppercase text-sm tracking-widest hover:bg-white/5 transition-all"
            >
              联系我
            </a>
          </div>
        </div>

        {/* 右侧：元数据 */}
        <div className="mono text-[10px] text-neutral-500 grid grid-cols-2 gap-x-12 gap-y-4 border-l hairline-border border-[#333333] pl-12 pb-4">
          <div>
            <div className="text-neutral-600 mb-1">CORE_STACK</div>
            <div className="text-on-surface">复杂系统 / 平台产品</div>
          </div>
          <div>
            <div className="text-neutral-600 mb-1">METHODOLOGY</div>
            <div className="text-on-surface">设计系统 / AI 工作流</div>
          </div>
          <div>
            <div className="text-neutral-600 mb-1">LOCATION</div>
            <div className="text-on-surface">上海 · 快手</div>
          </div>
          <div>
            <div className="text-neutral-600 mb-1">FOCUS</div>
            <div className="text-on-surface">Enterprise UX</div>
          </div>
        </div>
      </div>
    </section>
  );
}
