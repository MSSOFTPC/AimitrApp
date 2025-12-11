import ActionTypes from "../types/ActionTypes";
import {AffiliatorGetAllApi } from "./AffiliatorsApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const AffiliatorGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    AffiliatorGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("AffiliatorGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {AffiliatorGetAllAction}