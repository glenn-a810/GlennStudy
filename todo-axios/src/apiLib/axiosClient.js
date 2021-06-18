import axios from 'axios';
const myClient = (token) => {
    const client = axios.create();
    client.defaults.baseURL = 'https://express-sample-anmcv.run.goorm.io';
    client.defaults.headers.common['x-access-token'] = token;
    client.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 403) {
            }
            window.location.href = '/';
            return error;
        }
    );
    return client;   
};

export default myClient;
