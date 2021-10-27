module.exports = {
    base: '/MindPalace/',
    lang: 'zh-CN',
    title: 'Mind Palace',
    description: 'Everyting, All end here.',
  
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
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
          {
            text: '',
            link: '/front/vuejs/'
          },
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
            text: '开始',
            children: [
              {
                text: '学习资源',
                link: '/front/vuejs/'
              },
            ],
          },
          {
            text: 'Prepare 准备',
            children: [
              {
                text: '学习资源',
                link: '/front/vuejs/'
              },
              {
                text: '学习资源',
                link: '/front/vuejs/'
              },
              {
                text: '学习资源',
                link: '/front/vuejs/'
              },
              {
                text: '学习资源',
                link: '/front/vuejs/'
              },
            ],
          },
        ],
      }
    }
  }