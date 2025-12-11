import axios from 'axios' 
import { APP_URL } from "@env";

console.log("base url",APP_URL)

const BaseApi = axios.create({
    baseURL: APP_URL,
    withCredentials:true,
})


const setToken = (token:string) => {
    BaseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

export {setToken}
export default BaseApi;