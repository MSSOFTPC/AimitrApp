/**
 * ================================================================================================
 * About This Page
 * Name: - Auth Api
 * Description: - Manage User Loggedin, Signup, RefreshToken, Reset Tokens and Others
 * Api: - Login, Glogin, RefreshToken, Reset Email, Verify Email, Business Add, Business Update, Business Delete, Get , Get All
 * Features:- 
 * Author: - Mohd Samar
 * ================================================================================================
 */

import BaseApi from "../BaseApi"


// Google Login
interface OrderCreateApi {
    courseId:string
}
const OrderCreateApi = async({courseId}:OrderCreateApi)=>{
    return await BaseApi.post(`order`,{courseId})
}

const OrdersGetApi = async({query}:{query:string})=>{
    return await BaseApi.get(`order?${query}`,)
}


export {OrderCreateApi,OrdersGetApi}