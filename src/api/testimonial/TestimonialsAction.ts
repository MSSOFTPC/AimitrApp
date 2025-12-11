import ActionTypes from "../types/ActionTypes";
import {TestimonialsGetAllApi } from "./TestimonialsApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const TestimonialsGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    TestimonialsGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("TestimonialsGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {TestimonialsGetAllAction}