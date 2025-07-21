import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server1-pjta76dum-varsha-kundarapus-projects.vercel.app/',
  withCredentials: true,
});

export default instance;
