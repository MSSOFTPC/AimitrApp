import ActionTypes from "../types/ActionTypes";
import {InquiryAddApi, InquiryType } from "./InquiryApi";

interface ActionTypesquery extends InquiryType,ActionTypes {
}

const InquiryAction = ({name,email,phone,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    InquiryAddApi({name,email,phone}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("FaqGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {InquiryAction}