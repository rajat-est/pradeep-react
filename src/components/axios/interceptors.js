// / eslint-disable no-undef /
// import axios from "axios";
// import store from "../store";
// import { PERSIST_STORE_NAME } from "../constants/app.constant";
// import deepParseJson from "utils/deepParseJson";
// import appConfig from "configs/app.config";
// import { onSignOutSuccess } from "store/auth/sessionSlice";

// export const axiosClient = axios.create({
//   baseURL: appConfig.apiPrefix,
//   timeout: 30000,
//   headers: {
//     Accept: "application/json",
//   },
// });

// axiosClient.interceptors.request.use(
//   (config) => {
//     // const hasAccessToken = getToken();
//     const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
//     const persistData = deepParseJson(rawPersistData);

//     const hasAccessToken = persistData?.auth?.session.token;
//     hasAccessToken &&
//       (config.headers.Authorization = `Bearer ${hasAccessToken}`);
//     if (config.data instanceof FormData) {
//       // config.headers.ContentType = config.data.getHeaders();
//       config.headers['Content-Type'] = config.data.get('Content-Type');
//     } else {
//       config.headers.ContentType = "application/json";
//     }
//     return config;
//   },
//   (error) => {
//     console.log("error", error);
//     return Promise.reject(error);
//   },
//   { synchronous: true }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data && response.data.type == "application/pdf") {
//       return response.data;
//     } else if (response.data) {
//       return { ...response.data };
//     }
//     return Promise.reject(response.data);
//   },
//   (error) => {
//     // logError(error);
//     console.log("error-r", error);

//     switch (error?.response?.status) {
//       case 400:
//         return Promise.reject(error.response.data);
//       case 401:
//         unauthorizeAccess();
//         return Promise.reject(error.response.data);
//       case 403:
//         unauthorizeAccess();
//         return Promise.reject(error.response.data);
//       case 404:
//         return Promise.reject(error.response.data);
//       case 405:
//         return Promise.reject(error.response.data);
//       case 501:
//         return Promise.reject(error.response.data);
//       case 422:
//         return Promise.reject(error.response.data);
//       default:
//         return Promise.reject(error);
//     }
//   }
// );

// // function getUrl(config) {
// //   if (config?.baseURL) {
// //     let _url = config?.url;
// //     return _url.replace(config?.baseURL, "");
// //   }
// //   return config?.url;
// // }

// // const logError = (error) => {
// //   console.log(
// //     `% c#ERROR ${error?.response?.status} - ${getUrl(
// //       error?.response?.config
// //     )}: `,
// //     "color: #f44336; font-weight: bold",
// //     error?.response?.statusText
// //   );
// // };

// const unauthorizeAccess = () => {
//   store.dispatch(onSignOutSuccess());
// };