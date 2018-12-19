import cookie from 'react-cookies';
import { get, post } from './request.js';

// const displaypig = () => {
//   return get('http://172.16.1.167:8080/getAllPig').then((res) => {
//     return res;
//   });
// };

// const addPig = (value) => {
//   return post('http://172.16.1.167:8080/addpig', {
//     data: value,
//   });
// };

const checkSelect = () => {
  return get('http://172.16.1.167:8080/getAllPig');
};
// 显示猪的详情
const showDetail = (id) => {
  return get(`http://172.16.1.167:8080/getPigInfo/${id}`);
};
// 显示健康信息
const showHealthMin = (id) => {
  return get(`http://172.16.1.167:8080/getPigHealthInfo1/${id}`).then((resp) => {
    return resp;
  });
};


const showpiglist = (id) => {
  return get(`http://172.16.1.167:8080/getPigList/${id}`);
};
// 显示猪舍信息
// const pigsty = () => {
//   return get('url');
// };

const showEnvironmentalMin = (id) => {
  // return get(`http://172.16.1.167:8080/getPigHouseEnv1/${id}`).then((resp) => {
  //   return resp;
  // });
  return get('http://172.16.1.167:8080/getPigHouseEnv1/123456').then((resp) => {
    return resp;
  });
};
// 添加猪舍信息
// const addPigsty = (value) => {
//   return post('http://172.16.1.167:8080/addpig', {
//     data: value,
//   });
// }

// mock
const login = (value) => {
  cookie.save('account', value.account);
  return ({
    message: 'success',
  });
};

const pigsty = () => {
  const result = [
    {
      id: 123456,
      column: 1,
      ringNumber: 1,
      num: 12,
      person: '111',
      type: '公猪',
    },
    {
      id: 123789,
      column: 2,
      ringNumber: 2,
      num: 112,
      person: '222',
      type: '公猪',
    },
  ];
  return result;
};

const addPigsty = (value) => {
  return ({
    data: {
      message: 'success',
    },

  });
};
const displaypig = () => {
  const result = cookie.load('displaypigValue') || [];
  return result;
};

const addPig = (value) => {
  const result = cookie.load('displaypigValue') || [];
  result.push(value);
  cookie.save('displaypigValue', result);
  return ({
    data: {
      message: 'success',
    },

  });
};

export default {
  login,
  displaypig,
  addPig,
  checkSelect,
  showDetail,
  showHealthMin,
  pigsty,
  showEnvironmentalMin,
  showpiglist,
  addPigsty,
};
