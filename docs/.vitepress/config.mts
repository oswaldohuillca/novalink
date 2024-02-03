import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NovaLink",
  description: "A simple API resource for devs.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ubigeo', link: '/ubigeo/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          {
            text: 'Ubigeo',
            link: '/ubigeo/',
            items: [
              {
                text: 'Peru',
                link: '/ubigeo/peru/',
                items: [
                  { text: 'Department', link: '/ubigeo/peru/department/' },
                  { text: 'Province', link: '/ubigeo/peru/province/' },
                  { text: 'District', link: '/ubigeo/peru/district/' },
                ]
              },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oswaldohuillca/novalink' }
    ]
  },
  outDir: '../dist',
})
