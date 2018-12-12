import cookie from 'react-cookies';

const login = (value) => {
  if (value.part == 1 && value.account == 2 && value.password == 3) {
    return ({
      message: 'success',
    });
  }
  return ({
    message: 'error',
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
  };
  return result;
};

const showHealthMin = (value) => {
  const result = [
    {
      datetime: '00:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:01',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:02',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:03',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:04',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:05',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:06',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:07',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:08',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:09',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:10',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:11',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:12',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:13',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:14',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:15',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:16',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:17',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:18',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:19',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:20',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:21',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:22',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:23',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:24',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:25',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:26',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:27',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:28',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:29',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:30',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:31',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:32',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:33',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:34',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:35',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:36',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:37',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:38',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:39',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:40',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:41',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:42',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:43',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:44',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:45',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:46',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:47',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:48',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:49',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:50',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:51',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:52',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:53',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:54',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:55',
      count: Math.floor(Math.random() * (999) + 1) },
    {
      datetime: '00:56',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:57',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:58',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:59',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '00:60',
      count: Math.floor(Math.random() * (999) + 1),
    },
  ];
  return result;
};

const showHealthHour = (value) => {
  const result = [
    {
      datetime: '01:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '02:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '03:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '04:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '05:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '06:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '07:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '10:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '11:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '12:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
  ];
  return result;
};

const showHealthDay = (value) => {
  const result = [
    {
      datetime: '01:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '02:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '03:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '04:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '05:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '06:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '07:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '08:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '10:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '11:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '12:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '13:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '14:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '15:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '16:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '17:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '18:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '19:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '20:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '21:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '22:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '23:00',
      count: Math.floor(Math.random() * (999) + 1),
    },
    {
      datetime: '24:00',
      count: Math.floor(Math.random() * (999) + 1),
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
    },
    {
      id: 0,
      column: 2,
      ringNumber: 2,
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
};
