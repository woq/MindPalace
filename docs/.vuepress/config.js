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
          text: '大前端',
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
            }
        ]
      },{
        text: 'Vue',
        children: [
          {
            text: '简介',
            link: '/front/vuejs/'
          },
        ]
      }
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
      }
    }
  }