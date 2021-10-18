module.exports = {
    lang: 'zh-CN',
    title: 'Mind Palace',
    description: 'Everyting, All end here.',
  
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: 'Foo',
          link: '/foo/',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
    },
  }