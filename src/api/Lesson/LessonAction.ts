import ActionTypes from "../types/ActionTypes";
import { GetLearningCourseApi, GetLessonsForFrontendApi, GetSecureVideoApi } from "./LessonApi";

interface GetLearningCourseType extends ActionTypes {
    slug:string
}

const GetLearningCourseAction = ({slug,onSuccess,onFailed,onFinally}:GetLearningCourseType)=>{
    GetLearningCourseApi({slug}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("GetLearningCourseAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}


// Get Secure video
interface GetSecureVideoType extends ActionTypes {
    url:string
}

const GetSecureVideoAction = ({url,onSuccess,onFailed,onFinally}:GetSecureVideoType)=>{
    GetSecureVideoApi({url}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("GetSecureVideoAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

// Get Lessons
export interface GetLessonsForFrontendActionType extends ActionTypes {
    id:string
}

const GetLessonsForFrontendAction = ({id,onSuccess,onFailed,onFinally}:GetLessonsForFrontendActionType)=>{
    GetLessonsForFrontendApi({id}).then((res)=>{
        onSuccess?.(res.data.response);
    }).catch((err)=>{
        const Errmsg = err?.response?.data?.message || "Server Error"
        console.log("GetLessonsForFrontendAction Failed =>",err)
        onFailed?.(Errmsg);
    }).finally(()=>{
        onFinally?.();
    })
}

export { GetLearningCourseAction,GetSecureVideoAction, GetLessonsForFrontendAction }