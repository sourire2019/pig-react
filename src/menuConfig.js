// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  //   {
  //     name: '首页',
  //     path: '/',
  //     icon: 'home',
  //   },
  //   {
  //     name: '反馈',
  //     path: 'https://github.com/alibaba/ice',
  //     external: true,
  //     newWindow: true,
  //     icon: 'message',
  //   },
  //   {
  //     name: '帮助',
  //     path: 'https://alibaba.github.io/ice',
  //     external: true,
  //     newWindow: true,
  //     icon: 'bangzhu',
  //   },
];

const asideMenuConfig = [
  {
    name: '生产任务',
    path: '/produce',
    icon: 'home',
    children: [{ name: '后备公猪区', path: '/produce/show' }],
  },
  {
    name: '快查中心',
    path: '/quickchech',
    icon: 'home',
    children: [
      { name: '公猪记录卡', path: '/quickchech/show' },
      { name : '猪舍记录', path: '/quickchech/pigsty' },
    ],
  },

];

export { headerMenuConfig, asideMenuConfig };
