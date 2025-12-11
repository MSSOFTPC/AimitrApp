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

import { MediaUploadApi } from "./mediaApi"

// Courses
const MediaUploadAction = async({data,onUploadProgress,onSuccess,onFailed,onFinally}:{data:any,onUploadProgress?:(a:number)=>void,onSuccess?:(a:any)=>void,onFailed?:(a:any)=>void,onFinally?:()=>void})=>{
    MediaUploadApi({data,onUploadProgress}).then((res:any)=>{
        onSuccess?.(res.data?.response?.Preview_Urls)
    }).catch((err:any)=>{
        onFailed?.(err?.response?.data)
        console.log("MediaUploadAction Error is =>",err?.response?.data || err)
    }).finally(()=>{
        onFinally?.()
    })
}

export {MediaUploadAction}