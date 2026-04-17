export const projects = [
  {
    id: "kaleido",
    title: "Kaleido IDE",
    subtitle: "低代码平台的 IDE 级交互框架重设计",
    role: "Lead UX Designer",
    tags: ["平台设计", "交互架构", "低代码", "设计系统"],
    problem:
      "随平台功能持续扩张，原有编辑器空间模型失效，用户在跨资源编辑中高度依赖经验判断，系统缺乏稳定的空间秩序。",
    value:
      "重新定义工作区语义，建立可扩展的 IDE 级空间规则体系，为后续所有功能接入提供统一框架。",
    highlight: "系统设计能力的核心锚点",
    year: "2024–2025",
    href: "/work/kaleido",
  },
  {
    id: "design-system",
    title: "设计系统建设",
    subtitle: "从 Token 体系到组件治理的全链路设计基础设施",
    role: "Design System Lead",
    tags: ["Design Tokens", "组件抽象", "Figma Variables", "工程协作"],
    problem:
      "多产品线并行开发导致视觉和交互规范碎片化，设计与工程之间缺乏统一语言，维护成本持续升高。",
    value:
      "建立 Base → Alias → Semantic → Component 四层 Token 体系，打通 Figma 到工程实现的映射路径。",
    highlight: "长期基础设施主线",
    year: "2023–2025",
    href: "/work/design-system",
  },
  {
    id: "ai-workflow",
    title: "AI 设计工作流",
    subtitle: "将 AI 能力嵌入真实设计流程的产品化探索",
    role: "UX Designer & Researcher",
    tags: ["AI for Design", "工作流设计", "Figma Plugin", "RAG"],
    problem:
      "AI 工具在设计团队中停留在「体验新功能」阶段，缺乏与真实工作流的深度整合，无法形成稳定的生产力提升。",
    value:
      "系统梳理 AI 在需求分析、交互评审、文档生成等环节的可操作接入点，探索企业内部安全合规的落地路径。",
    highlight: "AI 与设计结合的前沿探索",
    year: "2024–2025",
    href: "/work/ai-workflow",
  },
];

export type Project = (typeof projects)[0];
