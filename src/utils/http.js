import axios from 'axios';

const baseURL = 'https://glammed-up-server.herokuapp.com';

export default axios.create({ baseURL });
