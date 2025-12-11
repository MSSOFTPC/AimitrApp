import ActionTypes from "../types/ActionTypes";
import {PageGetAllApi , PageGetApi} from "./PageApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const PageGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    PageGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("PageGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export interface ActionTypesquerySlug extends ActionTypes {
    slug:string
}

const PageGetAction = ({slug,onSuccess,onFailed,onFinally}:ActionTypesquerySlug)=>{
    PageGetApi({slug}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("PageGetAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}



export {PageGetAllAction,PageGetAction}