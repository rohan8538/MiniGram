import axios from 'axios';
import { getAccessToken, KEY_ACCESS_TOKEN, removeAccessToken, setAccessToken } from './localStorageManager';


export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true,
});

//Interceptors

axiosClient.interceptors.request.use((req) => {
    const accessToken = getAccessToken(KEY_ACCESS_TOKEN);
    req.headers['Authorization'] = `Bearer ${accessToken}`;
    //console.log(req);
    return req;
})

axiosClient.interceptors.response.use(async (res) => {
    const data = res.data;
    //console.log('this is response', res);

    if(data.status === "OK"){
        return data;
    }

    const originalReq = res.config;
    //console.log("originalReq:", originalReq);

    const statusCode = data.responseCode;
    //console.log("statusCode:", statusCode);

    const error = data.response;
    //console.log("error:", error);
    //console.log('original req outside', !!!originalReq._retry);

    if(statusCode === 401 && !!!originalReq._retry){
        //console.log('original req inside', !!!originalReq._retry);

        originalReq._retry = true;
        //console.log('original req after update', originalReq);

        const result = await axios.create({
            withCredentials: true,
        }).get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refreshToken`);
        if(result.data.status === 'OK'){
            //console.log('result', result);

            setAccessToken(KEY_ACCESS_TOKEN, result.data.response.accessToken);
            //console.log(result);
            //console.log('original req before', originalReq.headers['Authorization']);

            originalReq.headers['Authorization'] = `Bearer ${result.data.response.accessToken}`;
            //console.log('original req after', originalReq.headers['Authorization']);

            const val = await axios(originalReq);
            //console.log('this is val', val.data);

            return val.data;
        } else {
            removeAccessToken(KEY_ACCESS_TOKEN);
            window.location.replace('/login', '_self');
            return Promise.reject(error);
        }
    }

    console.log('axios error: ', error)

    return Promise.reject(error);
}, async(error) => {
    return Promise.reject(error);
});