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
const TransactionAffiliateGetAllApi = async({query}:{query:string})=>{
    return await BaseApi.get(`user/transaction/affiliate?${query}`)
}

const TransactionWithdrawalGetAllApi = async({query}:{query:string})=>{
    return await BaseApi.get(`user/transaction/withdrawal?${query}`)
}

export {TransactionAffiliateGetAllApi,TransactionWithdrawalGetAllApi}