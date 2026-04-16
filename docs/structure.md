# 项目结构规划

## 目录结构

```
yueyueniao-site/
├── CLAUDE.md                    # Agent 上下文文件（必读）
├── docs/
│   ├── decisions.md             # 设计决策记录
│   ├── content-brief.md         # 内容简报
│   └── structure.md             # 本文件
├── public/
│   ├── images/
│   │   ├── work/
│   │   │   ├── kaleido/         # Kaleido 项目图片
│   │   │   ├── design-system/   # 设计系统图片
│   │   │   └── ai-workflow/     # AI 工作流图片
│   │   └── writing/             # 文章配图
│   └── og/                      # Open Graph 分享图
├── content/
│   ├── work/
│   │   ├── kaleido.mdx
│   │   ├── design-system.mdx
│   │   └── ai-workflow.mdx
│   └── writing/
│       └── [slug].mdx
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 全局 layout
│   │   ├── page.tsx             # 首页
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # 项目详情页
│   │   └── writing/
│   │       └── [slug]/
│   │           └── page.tsx     # 文章详情页
│   ├── components/
│   │   ├── sections/            # 首页各 section 组件
│   │   │   ├── Hero.tsx
│   │   │   ├── SelectedWork.tsx
│   │   │   ├── FocusAreas.tsx
│   │   │   ├── HowIThink.tsx
│   │   │   ├── Writing.tsx
│   │   │   ├── AIExploration.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/                  # 通用 UI 组件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── AIPanel.tsx      # AI 对话面板
│   │   │   └── Nav.tsx
│   │   └── work/                # 项目详情页组件
│   │       ├── ProjectHeader.tsx
│   │       ├── ProjectContent.tsx
│   │       └── ProjectNav.tsx
│   ├── data/                    # 首页静态数据
│   │   ├── projects.ts          # 三个项目的元数据
│   │   ├── focus-areas.ts
│   │   ├── thinking.ts
│   │   ├── writing.ts
│   │   └── ai-responses.ts      # AI 模拟回答（后续替换为真实 API）
│   ├── lib/
│   │   ├── mdx.ts               # MDX 处理工具
│   │   └── cn.ts                # classnames 工具
│   └── styles/
│       └── globals.css          # Tailwind 入口 + CSS 变量
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 构建顺序

1. **脚手架**：`npx create-next-app@latest`，配置 Tailwind + TypeScript
2. **基础设施**：CSS 变量、字体引入、全局 layout、Nav
3. **首页 sections**：按顺序开发 Hero → Work → Focus → Think → Writing → AI → Contact
4. **项目详情页**：模板 + Kaleido MDX 内容
5. **内容接入**：MDX pipeline 打通
6. **AI 对话**：Claude API 接入（独立阶段）
7. **部署**：Vercel 配置 + 域名绑定

## 依赖规划

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "next-mdx-remote": "^4",
    "gray-matter": "^4",
    "clsx": "^2",
    "tailwind-merge": "^2",
    "framer-motion": "^11",
    "@anthropic-ai/sdk": "^0.x"   // AI 对话阶段再安装
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^3",
    "@types/react": "^18",
    "@types/node": "^20"
  }
}
```
