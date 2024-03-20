import axios from "axios"



export const  POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const  POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const  POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"

export const  POST_SIGNIN_REQUIEST="POST_SIGNIN_REQUIEST"
export const  POST_SIGNIN_SUCCESS="POST_SIGNIN_SUCCESS"
export const  POST_SIGNIN_FAILURE="POST_SIGNIN_FAILURE"


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

const postSigninRequiest=()=>{
    return({
        type:POST_SIGNIN_REQUIEST
    })
}
const postSigninSuccess=(data)=>{
    return({
        type:POST_SIGNIN_SUCCESS,
        payload:data
    })
}
const postSigninFailure=()=>{
    return({
        type:POST_SIGNIN_FAILURE
    })
}


export const postSignup=(data)=>(dispatch)=>{
    dispatch(postSignupRequiest())
    return axios({
        url:"http://localhost:1010/user/signup",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        console.log("res.data",res.data)
        // localStorage.setItem("token",res.data.token)
        // console.log("token",res.data.token)
    })
    .catch((err)=>{
        dispatch(postSignupFailure())
    })
}


export const postSignin=(data)=>(dispatch)=>{
    console.log("datatatat",data)
    dispatch(postSigninRequiest())
    return axios({
        url:"https://reqres.in/api/register",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSigninSuccess(res.data))
        console.log("res.data",res.data)
        localStorage.setItem("token",res.data.token)
    
    })
    .catch((err)=>{
        dispatch(postSigninFailure())
    })
}