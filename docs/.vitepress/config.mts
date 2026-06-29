import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";


// Teek 主题配置
const teekConfig = defineTeekConfig({});

// https://vitepress.dev/reference/site-config
export default defineConfig({

  extends: teekConfig,
  
  title: "我要带着我的旗帜我的奖章带上我的兄弟们在山顶上面摆造型，我要比你看到过的听到过的那些所有花里胡哨加在一起还要顶",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记列表', link: '/局域网连接打印机.md' }
    ],

    sidebar: [
      {
        text: '笔记列表',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '局域网连接打印机', link: '/局域网连接打印机.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: '联系我-微信.md', link: '/联系我-微信.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SJTiWLH' }
    ]
  }
})
