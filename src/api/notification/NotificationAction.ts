import ActionTypes from "../types/ActionTypes";
import {NotificationGetAllApi, NotificationUpdateApi } from "./NotificationApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const NotificationGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    NotificationGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("NotificationGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

interface ActionUpdateTypesquery extends ActionTypes {
    id:string
}

const NotificationUpdateGetAllAction = ({id,onSuccess,onFailed,onFinally}:ActionUpdateTypesquery)=>{
    NotificationUpdateApi({id}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("NotificationUpdateGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {NotificationGetAllAction,NotificationUpdateGetAllAction}