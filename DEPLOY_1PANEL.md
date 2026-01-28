# 1Panel 部署指南：曜行智能 (Obsidian Intelligence)

本指南将帮助你在 1Panel 面板中高效部署 **曜行智能** 应用官网。

## 🛡️ 部署特性

项目已针对容器化环境进行深度优化：

- **微型化**：启用 Next.js `standalone` 模式，镜像体积更小。
- **现代化**：使用 Docker Compose 编排，支持一键扩容与重启管理。
- **自动化**：集成 Dockerfile，自动完成依赖安装与生产环境构建。

## 📦 部署方法 A：使用容器编排 (推荐)

这是最简便的部署方式，1Panel 将自动处理镜像构建与容器运行。

### 1. 准备代码

- 将完整项目代码上传至服务器（例如：`/opt/1panel/apps/obsidian-web`）。
- **必须** 包含以下核心文件：
  - `Dockerfile`
  - `docker-compose.yml`
  - `next.config.mjs`
  - `package.json`
  - `src/` 目录
  - `public/` 目录
- _提示：无需上传 `node_modules` 和 `.next` 目录，构建过程会自动生成。_

### 2. 创建编排

- 登录 1Panel，进入 **容器** > **编排**。
- 点击 **创建编排**：
  - **名称**：`obsidian-intelligence`
  - **路径**：选择步骤 1 中代码所在的目录。
- 确认 `docker-compose.yml` 内容无误：

```yaml
version: "3"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    image: obsidian-web:latest
    container_name: obsidian-web
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### 3. 启动与验证

- 点击 **确认**。1Panel 会启动镜像构建流程（通常耗时 2-5 分钟）。
- 构建完成后，容器状态变为“运行中”。
- 访问：`http://服务器IP:3000`。

---

## 🛠️ 部署方法 B：手动镜像构建

如果你需要更精细地管理镜像版本：

1. **构建镜像**：进入 **容器** > **镜像** > **构建镜像**。
   - **名称**：`obsidian-web:1.0.0`
   - **Dockerfile 目录**：选择上传的代码目录。
2. **启动容器**：进入 **容器** > **容器** > **创建容器**。
   - 分配端口 `3000`，挂载非必要，环境设置为 `NODE_ENV=production`。

## 🌐 域名接入 (反向代理)

为了支持 HTTPS 和 80/443 端口访问：

1. 在 1Panel 中进入 **网站** > **创建网站**。
2. 选择 **反向代理**。
3. **代理地址**：`http://127.0.0.1:3000`。
4. 在“HTTPS”选项卡中申请与部署 SSL 证书。

## ❓ 常见问题

- **构建失败**：请检查服务器磁盘空间是否充足，或因网络问题无法连接 npm 仓库。
- **静态资源丢失**：请确保上传了 `public` 文件夹，它是存放品牌视觉资源的关键。
- **语言显示异常**：部署后默认使用中文，如需修改，请通过 `src/i18n.ts` 调整。

---

_© 2026 曜行智能 | 系统运维团队_
