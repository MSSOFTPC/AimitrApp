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

import type ActionTypes from "../../types/ActionTypes";
import { AuthGloginApi, AuthRefreshApi, AuthUpdateApi, EmailVerifyApi, SponsorGetBySlugApi, RegisterApi, AuthloginApi, RefreshApi, MyCoursesApi, AuthUpdateApiType, UserCourseProgressApi, SettingsGetApi, getMyReferralsApi, PasswordUpdateApi } from "./AuthApi";
import { accountDetailsType, addressType } from "./AuthType";


// Register
interface AuthRegisterAction extends ActionTypes{
    otp:number|string,
    email:string,
    fullName:string,
    password:string,
    phone:number
}
const AuthRegisterAction = ({otp,email,fullName,password,phone,onSuccess,onFailed,onFinally}:AuthRegisterAction)=>{
    RegisterApi({otp,email,fullName,password,phone}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("AuthRegisterAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

// Login
interface AuthLoginAction extends ActionTypes{
    email:string,
    password:string,
}
const AuthLoginAction = ({email,password,onSuccess,onFailed,onFinally}:AuthLoginAction)=>{
    AuthloginApi({email,password}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("AuthLoginAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

// Glogin
interface AuthGLoginAction extends ActionTypes{
    token:string,
}
const AuthGLoginAction = ({token,onSuccess,onFailed,onFinally}:AuthGLoginAction)=>{
    AuthGloginApi({token}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("GLogin Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

// auth Refresh
const AuthRefreshAction = async ({onSuccess,onFailed,onFinally}:ActionTypes)=>{  
    AuthRefreshApi().then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        onFailed?.(Errmsg);
        console.log('Refresh Failed',err.data.message)
    }).finally(()=>{
        onFinally?.();
    })
}


// Password Update
export interface AuthPasswordUpdateActionType extends ActionTypes, AuthUpdateApiType{
    password:string
}
const AuthPasswordUpdateAction = ({password,onSuccess,onFailed,onFinally}:AuthPasswordUpdateActionType)=>{
    PasswordUpdateApi({password}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('AuthUpdateAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

// Update
// data = {id}
export interface AuthUpdateAction extends ActionTypes, AuthUpdateApiType{
    fullName?:string
    avatar?:string
    sponsorby?:string
    accountDetails?:accountDetailsType
    address:addressType,
    kycDocument?:{
        panCard:String,
      }
}
const AuthUpdateAction = ({fullName,address,phone,avatar,sponsorby,accountDetails,kycDocument,onSuccess,onFailed,onFinally}:AuthUpdateAction)=>{
    AuthUpdateApi({fullName,avatar,address,phone,sponsorby,kycDocument,accountDetails}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('AuthUpdateAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

interface SponsorGetBySlugAction extends ActionTypes{
   slug:string
}

const SponsorGetBySlugAction = ({slug,onSuccess,onFailed,onFinally}:SponsorGetBySlugAction)=>{
    SponsorGetBySlugApi({slug}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('AuthUpdateAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}


// Verify
interface VerifyEmailAction extends ActionTypes{
   email:string
}

const VerifyEmailAction = ({email,onSuccess,onFailed,onFinally}:VerifyEmailAction)=>{
    EmailVerifyApi({email}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('VerifyEmailAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

const RefreshAction = ({onSuccess,onFailed,onFinally}:ActionTypes)=>{
    RefreshApi().then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('RefreshAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}


const MyCoursesAction = ({onSuccess,onFailed,onFinally}:ActionTypes)=>{
    MyCoursesApi().then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('MyCoursesAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}


// UserCourseProgress
export interface UserCourseProgressType extends ActionTypes {
    id:string,
    progress:number,
} 
const UserCourseProgressAction = ({id,progress,onSuccess,onFailed,onFinally}:UserCourseProgressType)=>{
    UserCourseProgressApi({id,progress,}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('MyCoursesAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

// Settings
export interface UserCourseProgressType extends ActionTypes {
    
} 
const SettingsAction = ({onSuccess,onFailed,onFinally}:UserCourseProgressType)=>{
    SettingsGetApi().then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('SettingsAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}


// Settings
export interface UserCourseProgressType extends ActionTypes {
    
} 
const getMyReferralsAction = ({onSuccess,onFailed,onFinally}:UserCourseProgressType)=>{
    getMyReferralsApi().then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log('getMyReferralsAction Failed',Errmsg)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {AuthGLoginAction,AuthRefreshAction, AuthUpdateAction, SponsorGetBySlugAction, VerifyEmailAction, AuthLoginAction , 
    AuthRegisterAction, RefreshAction, MyCoursesAction,UserCourseProgressAction,
    SettingsAction, getMyReferralsAction,AuthPasswordUpdateAction}