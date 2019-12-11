import axios from 'axios';

export const request = async (method, url, data) => {

  const requestConfig = {
    baseURL: 'https://rn-workshops-be.herokuapp.com/api',
    method,
    url,
    data,
  };

  return axios(requestConfig);
};
