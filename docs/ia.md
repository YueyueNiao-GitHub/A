# 页面 IA 结构

## 首页 /

### Nav（固定顶部）
- 左：名字 / Logo
- 右：Work · Focus · Thinking · Writing · Contact

---

### S1 · Hero
- 左列
  - 身份标签（小字）
  - 主标题（大字）
  - 副文案（2行）
  - 按钮组：View Work / Ask Me
- 右列
  - AI 对话面板
    - 标题
    - 输入框
    - 预设问题按钮（4–6个）
    - 回复展示区

---

### S2 · Selected Work
- 标题
- 3张项目卡片（横排）
  - 封面图
  - 项目名 + 副标题
  - 角色 + 年份
  - 标签
  - 一句话亮点

---

### S3 · Focus Areas
- 标题
- 6个能力卡片（3列 × 2行）
  - 能力名称
  - 一句话描述

---

### S4 · How I Think
- 标题
- 4个方法论块（2列 × 2行）
  - 观点标题
  - 正文段落

---

### S5 · Writing
- 标题
- 3张文章卡片（横排）
  - 配图
  - 标签
  - 文章标题
  - 摘要

---

### S6 · AI Exploration
- 深色背景
- 标题
- 4个角色 Tab（Hiring Manager / Design Leader / Engineer / Collaborator）
- 内容区（随 Tab 切换）

---

### S7 · Contact
- 标题 + 一句话
- 3种联系方式（Email / LinkedIn / 微信）

---

### Footer
- 版权

---

## 项目详情页 /work/[slug]

- Nav（返回首页）
- Header：项目名 + 副标题 + 角色 + 年份 + 标签
- 封面图（全宽）
- 正文（MDX，支持标题 / 段落 / 图片 / 引用块）
- 底部：上一个 / 下一个项目

---

## 文章详情页 /writing/[slug]（后续）

- Nav
- Header：文章标题 + 摘要 + 日期 + 标签
- 正文（MDX）
- 底部：返回文章列表
