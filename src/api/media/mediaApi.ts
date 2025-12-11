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

interface MediaUploadApi {
    data:File,
    onUploadProgress?:(v:number)=>void,
}

// Courses
const MediaUploadApi = async({data,onUploadProgress}:MediaUploadApi)=>{
    const mediaTypes = 'media/'
    return await BaseApi.post(mediaTypes,data,{
        headers:{
            'Content-Type':'multipart/form-data'
        },
        onUploadProgress:(progressEvent:any)=>{
            const percentCompleted:any = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onUploadProgress?.(percentCompleted)
        }
    });
}

export {MediaUploadApi}