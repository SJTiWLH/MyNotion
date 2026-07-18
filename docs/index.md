---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# hero:
#   name: "松香接地走"
#   text: "绵绵发力，久久为功"
#   tagline: 日拱一卒的坚持，永远是打开成功之门的金钥匙。
#   actions:
#     - theme: brand
#       text: Python版本管理
#       link: /Python版本管理
#     - theme: alt
#       text: 联系我-微信
#       link: /联系我-微信.md

# features:
#   - title: 收纳所有碎片化思考
#     details: 代码、随笔、读书笔记、生活感悟统一归档
#   - title: 长期复盘修正认知
#     details: 定期回看旧想法，看清过去狭隘，慢慢调整处事与看待世界的方式
#   - title: 克制倾诉，向内沉淀
#     details: 不拿琐事博取共鸣，记录只为理清自己，顺带给同频人一点参考
#   - title: 循序渐进自我完善
#     details: 不追求一夜蜕变，记录微小改变，承认成长是缓慢且反复的过程
---

<style>
.tool-entry-minimal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  margin: 28px auto;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  text-decoration: none;
  color: #ffffff;
  font-family: -apple-system, "SF Pro Display", "PingFang SC", sans-serif;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.tool-entry-minimal:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 40px rgba(59, 130, 246, 0.12);
  transform: translateY(-2px);
}
.tool-entry-minimal-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.tool-entry-minimal-icon {
  font-size: 22px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}
.tool-entry-minimal-text h4 {
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: #f1f5f9;
}
.tool-entry-minimal-text p {
  margin: 4px 0 0;
  font-size: 13px;
  font-weight: 400;
  color: #6b7280;
  letter-spacing: 0.2px;
}
.tool-entry-minimal-arrow {
  font-size: 20px;
  color: #4b5563;
  transition: all 0.3s ease;
  opacity: 0.5;
}
.tool-entry-minimal:hover .tool-entry-minimal-arrow {
  color: #3b82f6;
  opacity: 1;
  transform: translateX(4px);
}
/* 如果博客背景是浅色，自动适配 */
@media (prefers-color-scheme: light) {
  .tool-entry-minimal {
    background: rgba(0, 0, 0, 0.02);
    border-color: rgba(0, 0, 0, 0.06);
    color: #0f172a;
  }
  .tool-entry-minimal-text h4 { color: #0f172a; }
  .tool-entry-minimal-icon { background: rgba(0, 0, 0, 0.03); border-color: rgba(0, 0, 0, 0.04); }
}
</style>

<a href="/tools.html" class="tool-entry-minimal" target="_blank">
  <div class="tool-entry-minimal-left">
    <span class="tool-entry-minimal-icon">◆</span>
    <div class="tool-entry-minimal-text">
      <h4>工具中心</h4>
      <p>极简 · 即用 · 5 项实用功能</p>
    </div>
  </div>
  <span class="tool-entry-minimal-arrow">→</span>
</a>