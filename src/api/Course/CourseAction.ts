import ActionTypes from "../types/ActionTypes";
import { CourseGetApi, CourseReviewsGetApi, CoursesGetAllApi } from "./CourseApi";

interface ActionTypesquery extends ActionTypes {
    query:string
}

const CourseGetAllAction = ({query,onSuccess,onFailed,onFinally}:ActionTypesquery)=>{
    CoursesGetAllApi({query}).then((res)=>{
        onSuccess?.(res.data);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("CourseGetAllAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

interface ActionTypesnew extends ActionTypes {
    slug:string;
}

const CourseGetAction = ({slug,onSuccess,onFailed,onFinally}:ActionTypesnew)=>{
    CourseGetApi({slug}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("CourseGetAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

interface ActionTypesReview extends ActionTypes {
    id:string
    rating:number,
    comment:string
}

const CourseReviewAction = ({id,rating,comment,onSuccess,onFailed,onFinally}:ActionTypesReview)=>{
    CourseReviewsGetApi({id,rating,comment}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("CourseReviewAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export {CourseGetAction, CourseGetAllAction,CourseReviewAction}