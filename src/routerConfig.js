// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Login from './pages/Login';
import DisplayBoar from './pages/DisplayBoar';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/manage/company',
    layout: BasicLayout,
    component: DisplayBoar,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/produce/show',
    layout: BasicLayout,
    component: DisplayBoar,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
