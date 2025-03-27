import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitepress Boilerplate",
  description: "Vitepress Boilerplate for small projects",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },

          {
            text: 'Posts',
            collapsed: true,
            items: [
              { text: 'Posts Hello', link: '/posts/hello' },
              { text: 'Posts Drink', link: '/posts/drink' },
              {
                text: 'Post sub Item',
                collapsed: true,
                items: [
                  { text: 'Subposts Hello', link: '/posts/sub/hello' },
                  { text: 'Subposts Drink', link: '/posts/sub/drink' },
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'instagram', link: 'https://instagram.com/' }
    ],

    search: {
      provider: 'local'
    },

    //only accepts inline styles and html
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  }
})
