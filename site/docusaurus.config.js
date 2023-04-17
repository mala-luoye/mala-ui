const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mala UI",
  tagline: "一个基于React18 + TypeScript的前端UI组件库",
  favicon: "img/favicon.ico",
  url: "https://mala-luoye.github.io",
  baseUrl: "/",
  organizationName: "mala-luoye",
  projectName: "mala-ui",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Mala UI",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "组件库文档"
          },
          { to: "/blog", label: "开发者日志", position: "right" },
          {
            href: "https://github.com/mala-luoye/mala-ui",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} mala-ui.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
