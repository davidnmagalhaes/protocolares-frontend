import axios from 'axios';

const token = localStorage.getItem('@token');

const api = axios.create({
  baseURL: 'http://api.protocolares.morgancs.com.br/api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export default api;
