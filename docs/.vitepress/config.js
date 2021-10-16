module.exports = {
    lang: 'zh-CN',
    title: 'Mind Palace',
    description: 'Finsh what we started.',
    base: '/MindPalace/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },                      // 根路径
        { text: 'Front',
          items: [
            { text: 'HTML', link: '/front/html/' },
            { text: 'CSS', link: '/front/css/' }
          ]
        },
        { text: 'External', link: 'https://google.com' }, // 外部链接
      ],
      sidebar: 'auto',
      displayAllHeaders: true,
    }
  }