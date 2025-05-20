import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.192.89.242:5176/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
