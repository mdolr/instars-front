import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/_ah/api/tinyinsta/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
