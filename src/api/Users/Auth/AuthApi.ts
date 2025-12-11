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

import BaseApi from "../../BaseApi"
import { accountDetailsType, addressType } from "./AuthType"

// Google Login
interface GoogleLoginApi {
    token:string
}
const AuthGloginApi = async({token}:GoogleLoginApi)=>{
    return await BaseApi.post(`user/Glogin`,{token})
}

// Register
interface RegisterApi {
    otp:number|string,
    email:string,
    fullName:string,
    password:string,
    phone:number
}
const RegisterApi = async({otp,email,fullName,password,phone}:RegisterApi)=>{
    return await BaseApi.post(`user/register`,{otp,email,fullName,password,phone})
}

// Google Login
interface LoginApi {
    email:string,
    password:string
}
const AuthloginApi = async({email,password}:LoginApi)=>{
    return await BaseApi.post(`user/login`,{email,password})
}

// RefreshToken
const AuthRefreshApi = async()=>{
    return await BaseApi.post(`user/refresh`)
}

// password change
const PasswordUpdateApi = async({password})=>{
     return await BaseApi.post(`user/passwordUpdate`,{password})
}

// Update
export interface AuthUpdateApiType {
    fullName?:string,
    avatar?:string,
    sponsorby?:string
    accountDetails?:accountDetailsType,
    address:addressType,
    phone:number,
    kycDocument?:{
        panCard:String,
      }
}
const AuthUpdateApi = async({fullName,address,phone,avatar,sponsorby,kycDocument,accountDetails}:AuthUpdateApiType)=>{
    return await BaseApi.put(`user/`,{fullName,phone,address,avatar,sponsorby,kycDocument,accountDetails})
}

// Sponsor
const SponsorGetBySlugApi = async({slug}:{slug:string})=>{
    return await BaseApi.get(`user/sponsor/${slug}`)
}

// Email Verify
const EmailVerifyApi = async({email}:{email:string})=>{
    return await BaseApi.post(`user/verify`,{email})
}

// Refresh
const RefreshApi = async()=>{
    return await BaseApi.post(`user/refresh`)
}

// My Course
const MyCoursesApi = async()=>{
    return await BaseApi.post(`user/mycourses`)
}

// My Course
const UserCourseProgressApi = async({id,progress})=>{
    return await BaseApi.put(`user/progress/${id}`,{progress})
}

// Settings
const SettingsGetApi = async()=>{
    return await BaseApi.get(`settings`)
}

// referrals
const getMyReferralsApi = async()=>{
    return await BaseApi.get(`user/getmyreferrals`)
}

export {AuthGloginApi,AuthRefreshApi,UserCourseProgressApi,
    AuthUpdateApi,SettingsGetApi,SponsorGetBySlugApi,EmailVerifyApi,RegisterApi, 
    AuthloginApi, RefreshApi, MyCoursesApi,getMyReferralsApi,PasswordUpdateApi}