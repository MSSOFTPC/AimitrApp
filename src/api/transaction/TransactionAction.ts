import ActionTypes from "../types/ActionTypes";
import {TransactionAffiliateGetAllApi, TransactionWithdrawalGetAllApi } from "./TransactionApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const TransactionAffiliateGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    TransactionAffiliateGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("TransactionAffiliateGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

const TransactionWithdrawalGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    TransactionWithdrawalGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("TransactionWithdrawalGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {TransactionAffiliateGetAllAction,TransactionWithdrawalGetAllAction}