import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-proj-640e6.firebaseio.com/'
});

export default instance;