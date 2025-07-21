import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server1-varsha-kundarapus-projects.vercel.app/',
  withCredentials: true,
});

export default instance;
