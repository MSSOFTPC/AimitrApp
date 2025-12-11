/**
 * ================================================================================================
 * About This Page
 * Name: - Auth Actions
 * Description: - Manage User Loggedin, Signup, RefreshToken, Reset Tokens and Others Actions
 * Actions: - AuthLoginAction, AuthGLoginAction, AuthRefreshAction, AuthRegisterAction, AuthUpdateAction,
 *  AuthSendVerifyAction, AuthVerifyEmailAction, AuthPasswordUpdaterAction, Business Add,Business Update,Business Delete, Business Get, Business Get All
 * Features:- 
 * Author: - Mohd Samar
 * ================================================================================================
 */

import { ChangepasswordbyEmailApi, PasswordUpdatebyemailApi, VeriyForgetPasswordbyotpApi } from "./AuthApi";


const ChangepasswordbyEmailAction = ({email,onSuccess,onFailed,onFinally})=>{
    ChangepasswordbyEmailApi({email}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('ChangepasswordbyEmailAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

const VeriyForgetPasswordbyotpAction = ({email,otp,onSuccess,onFailed,onFinally})=>{
    VeriyForgetPasswordbyotpApi({email,otp}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('VeriyForgetPasswordbyotpApi Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

const PasswordUpdatebyemailAction = ({email,otp,password,onSuccess,onFailed,onFinally})=>{
    PasswordUpdatebyemailApi({email,otp,password}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('ChangepasswordbyEmailAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}


export {ChangepasswordbyEmailAction,VeriyForgetPasswordbyotpAction,PasswordUpdatebyemailAction}