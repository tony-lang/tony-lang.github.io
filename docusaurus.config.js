module.exports = {
  title: 'Tony Programming Language',
  tagline: 'Tony is a strongly typed, high level, general purpose programming language built for parallelism.',
  url: 'https://tony-lang.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tony-lang', // Usually your GitHub org/user name.
  projectName: 'tony-lang.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tony',
      hideOnScroll: true,
      links: [
        {
          to: 'docs/docs-introduction',
          activeBasePath: 'docs/docs-',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/reference/syntax',
          activeBasePath: 'docs/reference',
          label: 'Reference',
          position: 'left',
        },
        {
          to: 'docs/cli/install',
          activeBasePath: 'docs/cli',
          label: 'CLI',
          position: 'left',
        },
        {
          href: 'https://github.com/tony-lang/tony',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Tony formally apologizes to Tony Hoare for abusing his name.`,
    },
    algolia: {
      apiKey: 'a5c5c774d0e460a8f8ca0e032959f64c',
      indexName: 'tony-lang',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tony-lang/tony-lang.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
