import  cookie from 'react-cookies';

const  login = (value) => {
  if(value.part ==1 && value.account ==2 && value.password == 3){
    return ({
      message: 'success'
    })
  }else  {
    return ({
      message : 'error'
    })
  }
}

const displaypig = () => {
 let result =  cookie.load("displaypigValue") || [];
  return result;
}

const addPig = (value) => {
  let result =  cookie.load("displaypigValue") || [];
  result.push(value);
  console.log(result);
  cookie.save("displaypigValue", result);
  return ({
    'message' : 'success',
  })
}
export  default  {
  login,
  displaypig,
  addPig
}
