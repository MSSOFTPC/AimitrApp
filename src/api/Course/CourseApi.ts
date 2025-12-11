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


// Courses
const CoursesGetAllApi = async({query}:{query:string})=>{
    return await BaseApi.get(`course?${query}`)
}

// Courses
const CourseGetApi = async({slug}:{slug:string})=>{
    return await BaseApi.get(`course/${slug}`)
}

// Courses Reviews
const CourseReviewsGetApi = async({id,rating,comment}:{id:string,rating:number,comment:string})=>{
    return await BaseApi.post(`course/review/${id}`,{rating,comment})
}

export {CoursesGetAllApi,CourseGetApi,CourseReviewsGetApi}