import ActionTypes from "../types/ActionTypes";
import { CategoryGetAllApi } from "./CategoryApi";

const CategoryGetAllAction = ({onSuccess,onFailed,onFinally}:ActionTypes)=>{
    CategoryGetAllApi().then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("CategoryGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {CategoryGetAllAction}