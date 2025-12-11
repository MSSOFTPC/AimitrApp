export default interface ActionTypes {
    onSuccess?:(res:any)=>void,
    onFailed?:(err:any)=>void,
    onFinally?:()=>void
}