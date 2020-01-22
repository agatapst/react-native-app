import { API_URL } from 'react-native-dotenv';
import axios from 'axios';

export const request = async (method, url, data) => {
  const requestConfig = {
    baseURL: API_URL,
    method,
    url,
    data,
  };

  return axios(requestConfig);
};
