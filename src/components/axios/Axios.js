import axios from "axios";
import useLogOut from "../LogOut";

const API =  axios.create({
    baseURL:"http://localhost/API",
    timeout: 30000,
    headers: {
      Accept: "application/json",
    },
})
API.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

API.interceptors.response.use(function (response) {
    if (response && response.data && response.data.type ==='application/jso' ) {
         return response
    } else if(response.data){
        return { ...response };
    }
    return Promise.reject(response.data);
  }, function (error) {
    switch (error?.response?.status) {
        case 400:
          return Promise.reject(error.response.data);
        case 401:
       useLogOut()
          return Promise.reject(error.response.data);
        case 403:
       useLogOut()
          return Promise.reject(error.response.data);
        case 404:
          return Promise.reject(error.response.data);
        case 405:
          return Promise.reject(error.response.data);
        case 501:
          return Promise.reject(error.response.data);
        case 422:
          return Promise.reject(error.response.data);
        default:
          return Promise.reject(error);
      }
  });
export default API;