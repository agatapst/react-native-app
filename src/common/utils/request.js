import axios from 'axios';
// import secure store here 

export const request = async (method, url, data) => {
  // EXAMPLE OF TAKE TOKEN FROM STORE 
  // const token = await SecureStore.getItemAsync('token')

  const requestConfig = {
    baseURL: 'https://rn-workshops-be.herokuapp.com/api',
    method,
    url,
    data,
    // headers: {
    //   token
    // }
  };

  return axios(requestConfig);
};
