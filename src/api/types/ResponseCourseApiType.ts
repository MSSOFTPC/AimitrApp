export interface ResponseCourseApiType {
        limit: number   // current limit
        message: "Courses fetched successfully"
        page: number    // current page
        response:[]
        status: boolean
        total: number // total recorders
}