export const writingItems = [
  {
    id: "complex-backend-structure",
    title: "复杂后台的问题从来不是界面，而是结构失控",
    excerpt: "当一个后台系统变得难用，真正的问题往往不在界面层，而在信息结构和操作路径的失控。",
    tags: ["复杂系统", "信息架构"],
    date: "2024.11",
    href: "/writing/complex-backend-structure",
    published: false,
  },
  {
    id: "design-system-protocol",
    title: "设计系统的本质是建立一种跨角色的协议",
    excerpt: "设计系统不只是组件库，更是设计师、工程师、产品经理之间共享的决策语言。",
    tags: ["设计系统", "协作"],
    date: "2024.09",
    href: "/writing/design-system-protocol",
    published: false,
  },
  {
    id: "lowcode-interaction-abstraction",
    title: "低代码平台的交互抽象：从图形到逻辑",
    excerpt: "低代码平台的核心挑战不是「好用」，而是如何让用户理解并操作抽象的逻辑结构。",
    tags: ["低代码", "交互架构"],
    date: "2024.06",
    href: "/writing/lowcode-interaction-abstraction",
    published: false,
  },
  {
    id: "ai-design-engineer",
    title: "当 AI 成为 UI 的生成引擎，设计师还剩下什么",
    excerpt: "AI 生成界面的能力越来越强，但设计判断、系统思维和约束处理，仍然是人类的优势。",
    tags: ["AI for Design", "设计未来"],
    date: "2024.03",
    href: "/writing/ai-design-engineer",
    published: false,
  },
];

export type WritingItem = (typeof writingItems)[0];
