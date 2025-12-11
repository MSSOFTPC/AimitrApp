import ActionTypes from "../types/ActionTypes";
import {FaqGetAllApi } from "./FaqApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const FaqGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    FaqGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("FaqGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {FaqGetAllAction}