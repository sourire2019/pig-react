import cookie from 'react-cookies';
import { get, post } from './request.js';

const displaypig = () => {
  return get('http://172.16.1.167:8080/getAllPig').then((res) => {
    return res;
  });
};

const addPig = (value) => {
  return post('http://172.16.1.167:8080/addpig', {
    data: value,
  });
};

const checkSelect = () => {
  return get('http://172.16.1.167:8080/getAllPig');
};
// 显示猪的详情
const showDetail = (id) => {
  return get(`http://172.16.1.167:8080/getPigInfo/${id}`);
};
// 显示健康信息
const showHealthMin = (id) => {
  return get(`http://172.16.1.167:8080/getPigHealthInfo/${id}`).then((resp) => {
    return resp;
  });
};


const showpiglist = (id) => {
  return get(`http://172.16.1.167:8080/getPigList/${id}`);
};
// 显示猪舍信息
const pigsty = () => {
  return get('http://172.16.1.167:8080/pigHouseList');
};

const showEnvironmentalMin = (id) => {
  return get(`http://172.16.1.167:8080/getPigHouseEnv/${id}`).then((resp) => {
    return resp;
  });
};
// 添加猪舍信息
const addPigsty = (value) => {
  return post('http://172.16.1.167:8080/addPighouse', {
    data: value,
  });
};

// 显示猪舍列表

const pigstylist = () => {
  return get('http://172.16.1.167:8080/pigHouseIdList').then((resp) => {
    console.log(resp);
    return resp;
  });
};
// mock
const login = (value) => {
  cookie.save('account', value.account);
  return ({
    message: 'success',
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
  pigstylist,
};
