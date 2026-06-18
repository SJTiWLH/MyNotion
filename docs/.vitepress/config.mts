import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我要带着我的旗帜我的奖章带上我的兄弟们在山顶上面摆造型，我要比你看到过的听到过的那些所有花里胡哨加在一起还要顶",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记列表', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '笔记列表',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '局域网连接打印机', link: '/局域网连接打印机.md' },
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
          { text: 'Python版本管理', link: '/Python版本管理.md' },
          { text: 'Python版本管理', link: '/Python版本管理.md' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
