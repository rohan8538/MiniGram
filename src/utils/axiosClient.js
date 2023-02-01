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
    //console.log(res);
    if(data.status === "OK"){
        return data;
    }

    const originalReq = res.config;
   // console.log("originalReq:", originalReq);
    const statusCode = data.statusCode;
    //console.log("statusCode:", statusCode);
    const error = data.status;
    //console.log("error:", error);
    
    // Incase refresh Token expires redirect to login Page.
    if(statusCode === 401 && originalReq.url === `${process.env.REACT_APP_SERVER_BASE_URL}/auth/refreshToken`){
        removeAccessToken(KEY_ACCESS_TOKEN);
        window.location.replace('/login', '_self');
        return Promise.reject(error);
    }

    if(statusCode === 401 && !originalReq._retry){
        originalReq._retry = true;
        const result = await axios.create({
            withCredentials: true,
        }).get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`);
        if(result.status === 'ok'){
            setAccessToken(KEY_ACCESS_TOKEN, result.data.response.accessToken);
            console.log(result);
            originalReq.headers['Authorization'] = `Bearer ${result.data.response.accessToken}`;

            return axios(originalReq);
        }
    }

    return Promise.reject(error);
});