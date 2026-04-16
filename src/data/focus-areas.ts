export const focusAreas = [
  {
    id: "enterprise-ux",
    title: "Complex Enterprise UX",
    description: "多角色、高密度、强约束的企业级界面设计，信息架构与流程建模优先。",
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description: "Token 分层体系、组件抽象、设计与工程的语义对齐，治理而非风格统一。",
  },
  {
    id: "lowcode",
    title: "Low-code Platform",
    description: "平台型产品的交互框架、流程建模、可视化逻辑表达与用户心智模型。",
  },
  {
    id: "ai-design",
    title: "AI for Design",
    description: "AI 如何真正嵌入设计工作流——不是浮层能力，而是可操作的生产力工具。",
  },
  {
    id: "structured-thinking",
    title: "Structured Thinking",
    description: "系统化拆解问题、分层抽象、形成可复用的方法框架与决策模型。",
  },
  {
    id: "design-to-code",
    title: "Design-to-Code",
    description: "Figma Variables、JSON Schema、组件描述与 pipeline 自动化，缩短设计到实现的距离。",
  },
];

export type FocusArea = (typeof focusAreas)[0];
