import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c295f.firebaseio.com/'
})

export default instance;