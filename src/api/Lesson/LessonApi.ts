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


// GetLearningCourse
const GetLearningCourseApi = async({slug}:{slug:string})=>{
    return await BaseApi.get(`user/learning/${slug}`)
}

// GetLearningCourse
const GetSecureVideoApi = async({url}:{url:string})=>{
    // console.log("url",url)
    return await BaseApi.post(`media/presigned/`,{url})
}

const GetLessonsForFrontendApi = async({id}:{id:string})=>{
    return await BaseApi.get(`lesson/getlessonsfrontend/${id}`);
}

export {GetLearningCourseApi,GetSecureVideoApi,GetLessonsForFrontendApi}