import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server1-beta.vercel.app/',
  withCredentials: true,
});

export default instance;
