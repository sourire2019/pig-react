import cookie from 'react-cookies';
// import { get, post } from './request.js';

// const login = (value) => {
//   return post('url', {
//     value,
//   });
// };

// const display = () => {
//   return get('url');
// };

// const addPig = (value) => {
//   return post('url', {
//     data: value,
//   });
// };

// const checkSelect = () => {
//   return get('url');
// };

// const showDetail = (id) => {
//   return get(`url/${id}`);
// };

// const showHealthMin = (id) => {
//   return get(`url/${id}`);
// };

// const showHealthHour = (id) => {
//   return get(`url/${id}`);
// };

// const showHealthDay = (id) => {
//   return get(`url/${id}`);
// };

// const pigsty = () => {
//   return get('url');
// };

// const showEnvironmentalMin = (id) => {
//   return get(`url/${id}`);
// };

// const showEnvironmentalHour = (id) => {
//   return get(`url/${id}`);
// };
//
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

const displaypig = () => {
  const result = cookie.load('displaypigValue') || [];
  return result;
};

const addPig = (value) => {
  const result = cookie.load('displaypigValue') || [];
  result.push(value);
  cookie.save('displaypigValue', result);
  return ({
    message: 'success',
  });
};

const checkSelect = () => {
  const result = cookie.load('displaypigValue') || [];
  return result;
};
const showDetail = (value) => {
  const result = {
    earId: value,
    breed: 'wedr',
    column: 'cv fds',
    ringNumber: 'drecfv',
    MatingWeek: 'vfds',
    remarks: 'wef',
    operation: '324',
    status: '正常',
    pigstyId: 100,
  };
  return result;
};

const showHealthMin = (value) => {
  // console.log(value);
  const result = [
    {
      datetime: '00:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:01',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:02',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:03',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:04',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:05',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:06',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:07',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:08',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:09',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:10',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:11',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:12',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:13',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:14',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:15',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:16',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:17',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:18',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:19',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:20',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:21',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:22',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:23',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:24',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:25',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:26',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:27',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:28',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:29',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:30',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:31',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:32',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:33',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:34',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:35',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:36',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:37',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:38',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:39',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:40',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:41',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:42',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:43',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:44',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:45',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:46',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:47',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:48',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:49',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:50',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:51',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:52',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:53',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:54',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:55',
      count: Math.floor((Math.random() * (999)) + 1) },
    {
      datetime: '00:56',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:57',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:58',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:59',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '00:60',
      count: Math.floor((Math.random() * (999)) + 1),
    },
  ];
  return result;
};

const showHealthHour = (value) => {
  const result = [
    {
      datetime: '01:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '02:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '03:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '04:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '05:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '06:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '07:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '10:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '11:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '12:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
  ];
  return result;
};

const showHealthDay = (value) => {
  const result = [
    {
      datetime: '01:00',
      count: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '02:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '03:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '04:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '05:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '06:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '07:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '10:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '11:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '12:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '13:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '14:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '15:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '16:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '17:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '18:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '19:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '20:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '21:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '22:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '23:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
    {
      datetime: '24:00',
      count: Math.floor((Math.random() * (999)) + 1),
    },
  ];
  return result;
};

const pigsty = () => {
  const result = [
    {
      id: 0,
      column: 1,
      ringNumber: 1,
      num: 12,
      person: '111',
      type: '公猪',
    },
    {
      id: 10,
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
    {
      datetime: '0:02',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:03',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:04',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:05',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:06',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:07',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:08',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:09',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:10',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:11',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:12',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:13',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:14',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:15',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:16',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:17',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:18',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:19',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:20',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:21',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:22',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:23',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:24',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:25',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:26',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:27',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:28',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:29',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:30',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:31',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:32',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:33',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:34',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:35',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:36',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:37',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:38',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:39',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:40',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:41',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:42',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:43',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:44',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:45',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:46',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:47',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:48',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:49',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:50',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:51',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:52',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:53',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:54',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:55',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:56',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:57',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:58',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:59',
      CO2: Math.floor((Math.random() * 999) + 1),
      temperature: Math.floor((Math.random() * 999) + 1),
      humidity: Math.floor((Math.random() * 999) + 1),
    },
    {
      datetime: '0:60',
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
};
