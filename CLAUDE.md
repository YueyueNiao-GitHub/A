# 月月鸟个人网站 / yueyueniao-site

## 项目负责人

**徐应鹏**，品牌 ID：月月鸟  
快手 UX 设计师，专注企业级复杂产品、设计系统、低代码平台、AI 协作工作流  
目标：建立个人品牌，作品集 + 知识资产 + AI 驱动的可对话体验

---

## 技术栈

| 项目 | 选型 |
|------|------|
| Framework | Next.js 14（App Router） |
| 样式 | Tailwind CSS |
| 语言 | TypeScript |
| 部署 | Vercel |
| 域名 | 待申请（后续绑定） |
| AI 对话 | Claude API（当前跳过，预留接口） |

---

## 设计规范

### 颜色
```
主色（深海蓝）  --color-primary:   #04153F
背景（浅蓝白）  --color-bg:        #EDF2FA
强调（绿）      --color-accent:    #5BE7C4
文字主色        --color-text:      #0D1B2A
文字次级        --color-muted:     #4A5568
边框            --color-border:    #CBD5E1
```

### 字体
- 英文：`Inter`（Google Fonts 引入）
- 中文：系统无衬线（`-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif`）

### 审美原则
- 清晰、克制、结构性强、有层次、不炫技
- 系统性美学，而非视觉炫技
- Scroll reveal 轻微入场动效，hover 有微反馈
- 不使用紫色渐变、过度 glassmorphism 等 AI 模板化风格

---

## 页面结构

### 路由规划
```
/                          首页（7 sections）
/work/kaleido              Kaleido IDE 项目详情
/work/design-system        设计系统建设详情
/work/ai-workflow          AI 设计工作流详情
/writing/[slug]            文章详情（后续）
```

### 首页 7 个 Section

| # | 模块 | 核心内容 |
|---|------|----------|
| 1 | **Hero** | 左侧身份定位 + 右侧 AI 对话面板（预设问题入口） |
| 2 | **Selected Work** | 3 个代表项目卡片，各含角色/问题/标签/价值说明 |
| 3 | **Focus Areas** | 6 个能力标签卡片 |
| 4 | **How I Think** | 3-4 个方法论模块，标题 + 一句话 + 延伸链接 |
| 5 | **Writing / Insights** | 3-4 篇精选内容卡片 |
| 6 | **AI Exploration** | 横向大模块，角色切换（4 种访客视角） |
| 7 | **Contact / CTA** | 简洁收口，三种接触路径 |

---

## 核心项目内容

### 1. Kaleido IDE（核心锚点）
- **定位**：低代码平台的 IDE 级交互框架重设计
- **核心问题**：Kaleido 随平台功能扩张，原有空间模型失效，用户在跨资源编辑中持续依赖经验判断，系统缺乏稳定的空间秩序
- **我的角色**：Lead UX Designer
- **关键设计**：工作区语义重定义（左导航/中央编辑区/底部结构区/右辅助区）、页面模型交互体系重建、可控个性化空间边界
- **阶段一**：统一编辑器框架 + 文件管理能力建设
- **阶段二**：工作空间规则重构（空间语义、工具层分离、全局接入规范）
- **项目线**：Kaleido IDE 3.0

### 2. 设计系统建设（长期主线）
- **定位**：核心基础设施，而非普通规范整理
- **内容**：token 分层（Base → Alias → Semantic → Component）、Figma Variables 映射、组件抽象层级、多主题/多品牌扩展、设计与工程一致性治理
- **代表输出**：token 体系文档、设计系统课程素材

### 3. AI 设计工作流
- **内容**：AI 如何接入真实设计流程（需求分析/交互图/评审/文档生成）
- **关注点**：可操作位置、工程边界、企业安全合规

---

## Focus Areas（6个能力标签）

```
Complex Enterprise UX     复杂企业级 UX，多角色高密度界面
Design Systems            Token 体系、组件抽象、设计工程映射
Low-code Platform         平台型产品、流程建模、可视化逻辑
AI for Design             AI 接入设计工作流的产品化思路
Structured Thinking       系统化拆解、层级抽象、可复用方法
Design-to-Code            Figma Variables、JSON Schema、pipeline
```

---

## How I Think（方法论模块）

```
1. 复杂系统设计
   先分析信息结构，再调节视觉与组件
   关注跨模块一致性，而非局部优化

2. 设计系统理解
   设计系统不是样式统一，而是决策成本统一
   token、组件、模式、业务映射必须连起来

3. AI 与设计的关系
   AI 不只是生成图，而是帮助理解、拆解、协作、表达
   真正价值在于嵌入工作流，而非独立浮层

4. 设计与工程的平衡
   关注抽象层级是否能映射实现
   避免只在设计侧成立的"假系统"
```

---

## AI 对话模块规划

### Hero 区入口
- 标题：`Ask about my work`
- 输入框（后续接 Claude API）
- 预设问题（4-6个可点击按钮）：
  - 「哪个项目最能体现你的系统设计能力？」
  - 「你如何处理复杂后台的信息架构？」
  - 「你对设计系统的理解是什么？」
  - 「适合什么类型的团队或岗位？」
  - 「如何将 AI 用进设计流程？」
  - 「Kaleido 项目里最难的设计决策是什么？」

### AI Exploration 模块（Section 6）
- 角色切换：For Hiring Managers / For Design Leaders / For Engineers / For Collaborators
- 每个角色点击后展示对应语境下的结构化回答
- **当前实现**：模拟静态回答，API 接口预留
- **后续**：接入 Claude API，实现真实上下文对话

---

## 内容管理策略

- **项目详情页**：MDX 文件存放在 `content/work/`，通过 `next-mdx-remote` 或 `contentlayer` 渲染
- **文章**：MDX 文件存放在 `content/writing/`
- **首页静态内容**：硬编码在 `data/` 目录下的 TypeScript 文件中，方便修改
- **图片**：放在 `public/images/`，按项目分文件夹

---

## 当前进度

- [x] 技术选型确认（Next.js + Vercel）
- [x] 页面结构确认（7 sections + 路由规划）
- [x] 设计规范确认（颜色/字体/风格）
- [x] 内容框架梳理（3个项目 + 6个能力 + 方法论）
- [x] AI 对话模块规划（预留 API 接口）
- [x] Next.js 项目脚手架搭建（Next.js 14 + Tailwind v4 + TypeScript）
- [x] 数据文件（src/data/：projects / focus-areas / thinking / writing / ai-responses）
- [x] MDX pipeline（src/lib/mdx.ts + next-mdx-remote + gray-matter）
- [x] 路由骨架（/ + /work/[slug] + /writing/[slug]，build 验证通过）
- [x] 内容文件（content/work/kaleido.mdx / design-system.mdx / ai-workflow.mdx）
- [x] 设计 Token（globals.css @theme 定义完成）
- [ ] UI 组件开发（Nav / Hero / SelectedWork / FocusAreas / HowIThink / Writing / AIExploration / Contact）
- [ ] 视觉样式落地（Tailwind 类名 + 动效）
- [ ] 真实图片资源填充
- [ ] AI 对话接入（Claude API）
- [ ] Vercel 部署 + 域名配置

---

## 协作规范

**给后续 Agent 的说明：**

1. 每次开始工作前，先读本文件了解当前进度
2. 完成一个模块后，更新上方「当前进度」中的勾选状态
3. 新的设计决策和内容确认，追加到 `docs/decisions.md`
4. 样式修改必须通过 Tailwind 的 CSS 变量体系，不要硬编码颜色
5. 所有内容数据放在 `src/data/` 目录，不要散落在组件里
6. 组件按功能分类：`components/sections/`（页面 section）、`components/ui/`（通用 UI）

**沟通风格偏好（徐应鹏）：**
- 结论先行，高信息密度，不废话
- 直接执行，不需要反复确认显而易见的事
- 中文输出
