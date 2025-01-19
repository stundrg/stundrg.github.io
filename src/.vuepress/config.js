import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'team SunSin',
  description: "주입중... 나는 데이터 엔지니어다.",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'tech-blog:Stundrg' }],
    ['meta', { property: 'og:description', content: "주입중... 나는 데이터 엔지니어다." }],
    ['meta', { property: 'og:image', content: 'https://stundrg.github.io/images/repository-open-graph-stundrg.png' }],
    ['meta', { property: 'og:url', content: 'https://github.com/stundrg/stundrg.github.io' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/turtle.jpg",
    logoDark: "/images/Darkturtle.webp",

    repo: "https://github.com/stundrg/stundrg.github.io/description",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "101", link: "https://github.com/ppabam/101/issues" },
      { text: "resume", link: "/resume" },
    ],

    sidebar: {
      "/": [
        {
          text: "share",
          collapsible: true,
          children: [
            "/tech/share/",
          ],
        },
        {
          text: "team",
          collapsible: true,	
          children: [
            "/team/tiger/",
            "/team/recruit/",
            "/team/how2pr/",
            "/team/tiger2agile/",
          ],
        },
        {
          text: "opensource",
          collapsible: true,
          children: [
            "/tech/share/opensource/",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-CM3WH0BYDF",
      debug: true,
    }),
  ],

})
