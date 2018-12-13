// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Login from './pages/Login';
import DisplayBoar from './pages/DisplayBoar';
import Check from './pages/Check';
import Detail from './pages/Detail';
import Pigsty from './pages/Pigsty';
import PigstyDetail from './pages/PigstyDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const routerConfig = [
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
    path: '/quickchech/show',
    layout: BasicLayout,
    component: Check,
  },
  {
    path: '/quickchech/show/detail',
    layout: BasicLayout,
    component: Detail,
  },
  {
    path: '/quickchech/pigsty',
    layout: BasicLayout,
    component: Pigsty,
  },
  {
    path: '/quickchech/pigsty/detail',
    layout: BasicLayout,
    component: PigstyDetail,
  },
  {
    path: '/manage/company',
    layout: BasicLayout,
    component: Home,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
