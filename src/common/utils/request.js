import axios from 'axios';

export const request = async (method, url, data) => {

  const requestConfig = {
    baseURL: '',
    method,
    url,
    data,
  };

  return axios(requestConfig);
};