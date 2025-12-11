import ActionTypes from "../types/ActionTypes";
import {InstructorGetAllApi } from "./InstructorApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const InstructorGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    InstructorGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("InstructorGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {InstructorGetAllAction}