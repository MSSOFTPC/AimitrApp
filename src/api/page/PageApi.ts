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
const PageGetAllApi = async({query}:{query:string})=>{
    return await BaseApi.get(`faq?${query}`)
}

const PageGetApi = async({slug}:{slug:string})=>{
    return await BaseApi.get(`page/${slug}`)
}

export {PageGetAllApi,PageGetApi}