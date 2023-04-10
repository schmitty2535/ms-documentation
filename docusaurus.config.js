// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ms.docs',
  tagline: 'Navigate a diverse array of knowledge on ms.docs',
  url: 'https://maxschmitty.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-light.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'schmitty2535', // Usually your GitHub org/user name.
  projectName: 'ms-documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's roo
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'ms.docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ms-engineering logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/schmitty2535',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/schmitty2535',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} docs.maxschmitty - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'LIHKHQKEH2',
        apiKey: '8799dfa226f4747077382e2ac20073b1',
        rateLimit: 8,
        maxDepth: 10,
        startUrls: ['https://docs.maxschmitty.com/'],
        sitemaps: ['https://docs.maxschmitty.com/sitemap.xml'],
        ignoreCanonicalTo: true,
        discoveryPatterns: ['https://docs.maxschmitty.com/**'],
        actions: [
          {
            indexName: 'dev_mschmitty',
            pathsToMatch: ['https://docs.maxschmitty.com/**'],
            recordExtractor: ({ $, helpers }) => {
              // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
              const lvl0 =
                  $(
                      '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
                  )
                      .last()
                      .text() || 'Documentation';

              return helpers.docsearch({
                recordProps: {
                  lvl0: {
                    selectors: '',
                    defaultValue: lvl0,
                  },
                  lvl1: ['header h1', 'article h1'],
                  lvl2: 'article h2',
                  lvl3: 'article h3',
                  lvl4: 'article h4',
                  lvl5: 'article h5, article td:first-child',
                  lvl6: 'article h6',
                  content: 'article p, article li, article td:last-child',
                },
                indexHeadings: true,
                aggregateContent: true,
                recordVersion: 'v3',
              });
            },
          },
        ],
        initialIndexSettings: {
          YOUR_INDEX_NAME: {
            attributesForFaceting: [
              'type',
              'lang',
              'language',
              'version',
              'docusaurus_tag',
            ],
            attributesToRetrieve: [
              'hierarchy',
              'content',
              'anchor',
              'url',
              'url_without_anchor',
              'type',
            ],
            attributesToHighlight: ['hierarchy', 'content'],
            attributesToSnippet: ['content:10'],
            camelCaseAttributes: ['hierarchy', 'content'],
            searchableAttributes: [
              'unordered(hierarchy.lvl0)',
              'unordered(hierarchy.lvl1)',
              'unordered(hierarchy.lvl2)',
              'unordered(hierarchy.lvl3)',
              'unordered(hierarchy.lvl4)',
              'unordered(hierarchy.lvl5)',
              'unordered(hierarchy.lvl6)',
              'content',
            ],
            distinct: true,
            attributeForDistinct: 'url',
            customRanking: [
              'desc(weight.pageRank)',
              'desc(weight.level)',
              'asc(weight.position)',
            ],
            ranking: [
              'words',
              'filters',
              'typo',
              'attribute',
              'proximity',
              'exact',
              'custom',
            ],
            highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
            highlightPostTag: '</span>',
            minWordSizefor1Typo: 3,
            minWordSizefor2Typos: 7,
            allowTyposOnNumericTokens: false,
            minProximity: 1,
            ignorePlurals: true,
            advancedSyntax: true,
            attributeCriteriaComputedByMinProximity: true,
            removeWordsIfNoResults: 'allOptional',
            separatorsToIndex: '_',
          },
        },
      }
    }),
};

module.exports = config;
