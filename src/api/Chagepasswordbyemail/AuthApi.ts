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

// Send otp
const ChangepasswordbyEmailApi = async({email}:{email:string})=>{
    return await BaseApi.post(`user/changepasswordbyemail/`,{email})
}

// Verify otp
const VeriyForgetPasswordbyotpApi = async({email,otp}:{email:string,otp:string})=>{
    return await BaseApi.post(`user/veriyforgetpasswordbyotp/`,{email,otp})
}

// Verify otp
const PasswordUpdatebyemailApi = async({email,otp,password}:{email:string,otp:string,password:string})=>{
    return await BaseApi.post(`user/passwordupdatebyemail/`,{email,otp,password})
}


export {ChangepasswordbyEmailApi,VeriyForgetPasswordbyotpApi,PasswordUpdatebyemailApi}