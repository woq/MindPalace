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
            },
        ],
      }
      ]
    }
  }