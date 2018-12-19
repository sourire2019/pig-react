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
// const showHealthMin = (id) => {
//   return get(`http://172.16.1.167:8080/getPigHealthInfo/${id}`).then((resp) => {
//     return resp;
//   });
// };

const showHealthHour = (id) => {
  return get(`http://172.16.1.167:8080/getPigHealthInfo/${id}`);
};

const showHealthDay = (id) => {
  return get(`http://172.16.1.167:8080/getPigHealthInfo/${id}`);
};

const showpiglist = (id) => {
  return get(`http://172.16.1.167:8080/getPigList/${id}`);
};
// 显示猪舍信息
// const pigsty = () => {
//   return get('url');
// };

// const showEnvironmentalMin = (id) => {
//   return get(`http://172.16.1.167:8080/getPigHouseEnv/${id}`).then(Response =>{
//     console.log(Response)
//   })
// };

// const showEnvironmentalHour = (id) => {
//   return get(`url/${id}`);
// };

// const showEnvironmentalDay = (id) => {
//   return get(`url/${id}`);
// };

const login = (value) => {
  // if (value.part == 1 && value.account == 2 && value.password == 3) {
  //   return ({
  //     message: 'success',
  //   });
  // }
  cookie.save('account', value.account);
  return ({
    message: 'success',
  });
};

// const displaypig = () => {
//   const result = cookie.load('displaypigValue') || [];
//   return result;
// };

// const addPig = (value) => {
//   const result = cookie.load('displaypigValue') || [];
//   result.push(value);
//   cookie.save('displaypigValue', result);
//   return ({
//     message: 'success',
//   });
// };

// const checkSelect = () => {
//   const result = cookie.load('displaypigValue') || [];
//   return result;
// };
// const showDetail = (value) => {
//   const result = {
//     earId: value,
//     breed: 'wedr',
//     column: 'cv fds',
//     ringNumber: 'drecfv',
//     MatingWeek: 'vfds',
//     remarks: 'wef',
//     operation: '324',
//     status: '正常',
//     pigstyId: 100,
//   };
//   return result;
// };

const showHealthMin = (value) => {
  let result = [
    {
      "id": "2310107484439ghty",
      "temperature": "26.9",
      "datetime": "2018/12/18 20:23"
    },
    {
      "id": "2310107484439tr",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439tg",
      "temperature": "26.9",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439trgh",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439vbg",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439fre",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439d",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439a",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439341",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443913347",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443913324",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439563",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "23101074844390987",
      "temperature": "26.8",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "23101074844393456",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "2310107484439314",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443912323",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443934",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443989",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443956",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:24"
    },
    {
      "id": "231010748443923",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "23101074124439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310100484439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310107784439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2910107484439",
      "temperature": "",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2010107484439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "1310107484439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2320107484439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310117484439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310102484439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310107444439",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310107484239",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    },
    {
      "id": "2310107484419",
      "temperature": "26.7",
      "datetime": "2018/12/18 20:25"
    }
  ];
  return result;
};

// const showHealthHour = (value) => {
//   const result = [
//     {
//       datetime: '01:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '02:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '03:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '04:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '05:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '06:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '07:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '08:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '08:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '10:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '11:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '12:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//   ];
//   return result;
// };

// const showHealthDay = (value) => {
//   const result = [
//     {
//       datetime: '01:00',
//       count: Math.floor((Math.random() * 999) + 1),
//     },
//     {
//       datetime: '02:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '03:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '04:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '05:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '06:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '07:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '08:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '08:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '10:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '11:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '12:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '13:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '14:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '15:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '16:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '17:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '18:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '19:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '20:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '21:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '22:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '23:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//     {
//       datetime: '24:00',
//       count: Math.floor((Math.random() * (999)) + 1),
//     },
//   ];
//   return result;
// };

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

const showEnvironmentalMin = (id) => {
  const result = [
    {
      datetime: '0:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:01',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
  ];
  return result;
};
const showEnvironmentalHour = (id) => {
  const result = [
    {
      datetime: '1:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '2:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '3:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
  ];
  return result;
};
const showEnvironmentalDay = (id) => {
  const result = [
    {
      datetime: '1:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '2:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '3:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '4:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '5:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '6:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '7:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '8:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '9:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '10:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '11:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '12:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '13:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '14:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '15:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '16:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '17:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '18:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '19:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '20:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '21:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '22:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '23:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '24:00',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
  ];
  return result;
};
export default {
  login,
  displaypig,
  addPig,
  checkSelect,
  showDetail,
  showHealthMin,
  showHealthHour,
  showHealthDay,
  pigsty,
  showEnvironmentalMin,
  showEnvironmentalHour,
  showEnvironmentalDay,
  showpiglist,
};
