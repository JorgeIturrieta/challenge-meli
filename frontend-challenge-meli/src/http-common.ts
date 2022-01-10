import axios from 'axios';

export default axios.create({
  // baseURL: 'http://192.168.1.46:3001/api/',
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Content-type': 'application/json',
  },
});
