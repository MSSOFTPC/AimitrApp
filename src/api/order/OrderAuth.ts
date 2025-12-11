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

import ActionTypes from "../types/ActionTypes";
import { OrderCreateApi, OrdersGetApi } from "./OrderApi";


// Register
interface OrderCreateAction extends ActionTypes{
    courseId:string
}
const OrderCreateAction = ({courseId,onSuccess,onFailed,onFinally}:OrderCreateAction)=>{
    OrderCreateApi({courseId}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("OrderCreateAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

interface OrdersGetAction extends ActionTypes{
    query:string
}
const OrdersGetAction = ({query,onSuccess,onFailed,onFinally}:OrdersGetAction)=>{
    OrdersGetApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("OrdersGetAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export { OrderCreateAction, OrdersGetAction}