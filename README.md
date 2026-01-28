# 曜行智能：构建机器的脊梁 (Obsidian Intelligence)

![项目状态](https://img.shields.io/badge/状态-4A%20标准%20Manifesto-orange)
![设计规范](https://img.shields.io/badge/设计-Red%20Dot%20Standard-blue)
![技术栈](https://img.shields.io/badge/技术栈-Next.js%2016%20%7C%20Motion%20%7C%20Refining-black)

> **"真正的科技应当如引力般，无处不在，却不带声响。"**

曜行智能（Obsidian Intelligence）不只是一个品牌门户。它是对具身智能（Embodied AI）未来形态的一次美学实验与性能展示。

---

## 📽️ 设计构思思路与灵感 (The 4A Design Manifesto)

### 1. 核心灵感：黑曜石哲学 (The Obsidian Philosophy)

黑曜石诞生于岩浆的激速冷却。它代表了**“无序向有序的瞬间坍塌”**。

- **视觉逻辑**：全站采用深邃的“黑曜石黑”作为基调。这是一种带有体积感和质感的暗部表现，象征着深不可测的算力。
- **质感表达**：我们在 CSS 层注入了微量的**颗粒噪声（Film Grain）**。这打破了数字屏幕的廉价平滑感，赋予界面一种如同物理硬件般的纹理重量。

### 2. 引力美学与尺度感 (Gravity & Scale)

- **极简主义排版**：采用跨越屏幕的超大字号（Massive Scale）。这种比例带来的视觉压迫感，传达的是工业级算力的宏大叙事。
- **负空间逻辑**：全站保留了 40% 以上的有效留白。留白不是空白，而是为了让核心信息——**O-1 芯片**——在视觉真空中呼吸。

### 3. 动态叙事 (Cinematic Narrative)

- **非线性交互**：利用 Framer Motion 结合视差效应，让用户在滚动时感受到物理维度的层进，而非简单的页面切换。
- **水合加固**：针对 Next.js SSR 特性，对动态文本进行了组件级水合屏蔽（Hydration Shield），消灭所有水合警告。

---

## 🧠 品牌逻辑与内容策划

- **硬件之躯 (The Armor)**：从“冷”开始。强调 6000 系铝合金、CNC 工艺。展示爆炸视图，传递“无黑盒”的品牌信任度。
- **软件之魂 (The Reflex)**：从“快”切入。0.5ms 的响应速度不是冷冰冰的数字，是对物理世界的统治力。
- **品牌信条 (The Code)**：由物入心。解释本地化算力的必要性，升华至隐私保护与长期主义。

---

## 🛠️ 技术实现 (Technical Excellence)

- **核心框架**：Next.js 16 (App Router) + TypeScript。
- **交互引擎**：Framer Motion (用于具有物理反馈感的补间动画)。
- **视觉系统**：Tailwind CSS + CSS 3D Transforms (构建 3D 透视效果)。
- **多语言管理**：`react-i18next` 双语意译对齐，确保专业术语在两种语境下同样精准且富有张力。

---

## 🔍 设计审核标准 (Design Audit Items)

1.  **Typographic Integrity**：标题权重分级明确，正文行高锁定在 1.6 黄金比例。
2.  **Color Precision**：严格执行 `zinc-900` 到 `black` 的渐变秩序，点缀色仅限于 `orange-500`。
3.  **Interaction Feedback**：每一个点击动作都有物理反馈感（微缩放与透明度渐变）。
4.  **Aesthetic Continuity**：从 Logo 的几何菱形到背景的微细网格，全站元素保持 4px 步进对齐。

---

© 2026 曜行智能 (Obsidian Intelligence).  
**构建机器的脊梁，赋予钢铁以直觉。**
