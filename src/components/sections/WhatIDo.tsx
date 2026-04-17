const capabilities = [
  {
    num: "01",
    title: "复杂企业系统与后台设计",
    body: "处理高密度信息、多角色权限及长链路业务流程。通过结构化的设计语言，降低大型系统的操作门槛与认知成本。",
  },
  {
    num: "02",
    title: "平台产品与低代码系统",
    body: "设计具备高度抽象性的配置能力与交互模型。不仅关注界面，更关注底层逻辑对用户行为的赋能与约束。",
  },
  {
    num: "03",
    title: "设计系统与组件抽象",
    body: "从 Token 层开始构建组件体系，确保设计规范与代码实现的一致性。支持多主题、多平台及大规模团队的协同效率。",
  },
  {
    num: "04",
    title: "AI 驱动的设计流程",
    body: "探索 LLM 与设计工具的深度结合，通过 Prompt 工程、自动化脚本提升设计产出效率，重新定义设计工程师的工作流。",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="max-w-screen-2xl mx-auto border-x hairline-border border-[#333333] py-24 px-8"
    >
      <div className="grid md:grid-cols-3 gap-16">
        {/* 左侧说明 */}
        <div className="md:col-span-1">
          <span className="mono text-[10px] text-primary uppercase tracking-[0.3em]">
            SEC_02 / CAPABILITIES
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-2 mb-6">
            我主要处理复杂系统中的结构、系统与实现问题
          </h2>
          <p className="text-neutral-500">
            Beyond aesthetics: Solving for complexity, scalability, and engineering integrity.
          </p>
        </div>

        {/* 右侧列表 */}
        <div className="md:col-span-2 space-y-12">
          {capabilities.map((item, i) => (
            <div
              key={item.num}
              className={`group ${i < capabilities.length - 1 ? "border-b hairline-border border-[#333333] pb-8" : "pb-8"}`}
            >
              <div className="flex items-start gap-6">
                <span className="mono text-primary text-sm mt-1">{item.num}</span>
                <div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:pl-2 transition-all">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
