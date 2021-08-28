// 本地数据
module.exports = {
  menus: [
    {
      name: '本地首页',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: '本地主营',
      link: 'features.html'
    },
    {
      name: '本地关于',
      link: 'about.html'
    },
    {
      name: '本地联系',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('../package.json'),
  date: new Date()
}
