import axios from 'axios';

// const baseURL = 'https://glammed-up-server.herokuapp.com';
const baseURL = 'http://192.168.101.100:5000';

export default axios.create({ baseURL });
