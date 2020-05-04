import axios from 'axios';

const api = axios.create({
  baseURL: 'https://we-rock-api.herokuapp.com/',
});

export default api;