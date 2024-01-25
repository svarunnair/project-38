import axios from "axios"



export const  POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const  POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const  POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"


const postSignupRequiest=()=>{
    return({
        type:POST_SIGNUP_REQUIEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const postSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE
    })
}


export const postSignup=(data)=>(dispatch)=>{
    dispatch(postSignupRequiest())
    return axios({
        url:"http://localhost:8000/signup",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        console.log("res.data",res.data)
        localStorage.setItem("token",res.data.token)
    })
    .catch((err)=>{
        dispatch(postSignupFailure())
    })
}