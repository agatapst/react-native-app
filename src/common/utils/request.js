import axios from 'axios';

export const request = async (method, url, data) => {
  const requestConfig = {
    baseURL: 'http://localhost:3000',
    method,
    url,
    data,
  };

  return axios(requestConfig);
};
