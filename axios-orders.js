import axios from 'axios';

const instance = axios.create({
baseURL:'https://react-my-burger-6d8b7.firebaseio.com/'
});

export default instance;