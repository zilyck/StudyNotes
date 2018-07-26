module.exports = {
  title: 'Study Notes',
  description: 'National 4 and 5',
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Study Notes',
        items: [
          { text: 'Business', link: '/business/' },
          { text: 'Computing Science', link: '/computing-science/' },
          { text: 'English', link: '/english/' },
          { text: 'German', link: '/german/' },
          { text: 'Graphic Communication', link: '/graphic-communication/' },
          { text: 'Maths', link: '/maths/' },
          { text: 'Modern Studies', link: '/modern-studies/' },
        ]
      }
    ],
    sidebar: {
      '/business/': [
        '',
        'understanding-business',
        'marketing',
        'operations',
        'people',
        'finance'
      ],
      '/computing-science/': [
        '',
        'software-design-development',
        'computer-systems',
        'database-design-development',
        'web-design-development'
      ],
      '/english/': [
        ''
      ],
      '/german/': [
        ''
      ],
      '/graphic-communication/': [
        ''
      ],
      '/maths/': [
        ''
      ],
      '/modern-studies/': [
        '',
        'scottish-democracy',
        'social-issues',
        'pressure-groups',
        'usa'
      ],
    },
    serviceWorker: {
      updatePopup: true
    },
    algolia: {
      apiKey: 'd9bab0e1587d30c24fec7ec8c1f77358',
      indexName: 'prod'
    },
    lastUpdated: 'Last Updated',
  },
}