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

export interface InquiryType {
    name:string,
    email:string,
    phone:number
} 

// Courses
const InquiryAddApi = async({name,email,phone}:InquiryType)=>{
    return await BaseApi.post(`user/inquiry`,{name,email,phone})
}

export {InquiryAddApi}