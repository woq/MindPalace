module.exports = {
    base: '/MindPalace/',
    lang: 'zh-CN',
    title: 'Mind Palace',
    description: 'Everyting, All end here.',
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    themeConfig: {
      navbar: [
        // NavbarItem
        {
          text: 'Some',
          children: [
            {
              text: 'HTML',
              link: '/front/html/'
            },
            {
              text: 'CSS',
              link: '/front/css/'
            },
            {
              text: 'JS',
              link: '/front/js/'
            },
            {
              text: 'Efficiency',
              link: '/front/efficiency/'
            }
        ]
      },
      {
        text: 'Vue',
        children: [
          {
            text: '简介',
            link: '/front/vuejs/'
          },
        ]
      },
      {
        text: 'Knowledge',
        children: [
          {
            text: 'Reading',
            link: '/knowledge/reading/'
          },
        ]
      },
      ],
      sidebar: {
        '/front/vuejs/': [
          {
            text: '起步',
            link: '/front/vuejs/',
          },
          {
            text: 'Prepare 准备',
            children: [
              {
                text: '目录',
                link: '/front/vuejs/prepare/'
              }
            ],
          },
        ],
        '/knowledge/reading/': [
          {
            text: '阅读',
            link: '/knowledge/reading/',
          },
          {
            text: '技术',
            children: [
              {
                text: 'Vuejs 准备',
                link: '/front/vuejs/prepare/'
              }
            ],
          },
        ],
      }
    }
  }