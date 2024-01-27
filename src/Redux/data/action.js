import axios from "axios"


export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const GET_DETAIL_REQUIEST="GET_DETAIL_REQUIEST"
export const GET_DETAIL_SUCCESS="GET_DETAIL_SUCCESS"
export const GET_DETAIL_FAILURE="GET_DETAIL_FAILURE"

export const POST_CART_REQUIEST="POST_CART_REQUIEST"
export const POST_CART_SUCCESS="POST_CART_SUCCESS"
export const POST_CART_FAILURE="POST_CART_FAILURE"

export const GET_CART_REQUIEST="GET_CART_REQUIEST"
export const GET_CART_SUCCESS="GET_CART_SUCCESS"
export const GET_CART_FAILURE="GET_CART_FAILURE"

export const PATCH_CART_REQUIEST="PATCH_CART_REQUIEST"
export const PATCH_CART_SUCCESS="PATCH_CART_SUCCESS"
export const PATCH_CART_FAILURE="PATCH_CART_FAILURE"


const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const getDetailRequiest=()=>{
    return({
        type:GET_DETAIL_REQUIEST
    })
}
const getDetailSuccess=(data)=>{
    return({
        type:GET_DETAIL_SUCCESS,
        payload:data
    })
}
const getDetailFailure=()=>{
    return({
        type:GET_DETAIL_FAILURE
    })
}


const postCartRequiest=()=>{
    return({
        type:POST_CART_REQUIEST
    })
}
const postCartSuccess=(data)=>{
    return({
        type:POST_CART_SUCCESS,
        payload:data
    })
}
const postCartFailure=()=>{
    return({
        type:POST_CART_FAILURE
    })
}

const getCartRequiest=()=>{
    return({
        type:GET_CART_REQUIEST
    })
}
const getCartSuccess=(data)=>{
    return({
        type:GET_CART_SUCCESS,
        payload:data
    })
}
const getCartFailure=()=>{
    return({
        type:GET_CART_FAILURE
    })
}

const patchCartRequiest=()=>{
    return({
        type:PATCH_CART_REQUIEST
    })
}
const patchCartSuccess=(data)=>{
    return({
        type:PATCH_CART_SUCCESS,
        payload:data
    })
}
const patchCartFailure=()=>{
    return({
        type:PATCH_CART_FAILURE
    })
}



export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:" http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getDataFailure(err))
    })
}

export const getDetail=(id)=>(dispatch)=>{
    console.log("iddddd",id)
    dispatch(getDetailRequiest())
    return axios({
        url:`http://localhost:8000/data/${id}`,
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDetailSuccess(res.data))
        console.log("res.detail",res.data)
    })
    .catch((err)=>{
        dispatch(getDetailFailure(err))
    })
}

export const postCart=(data)=>(dispatch)=>{
    dispatch(postCartRequiest())
    return axios({
        url:" http://localhost:8000/cart",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postCartSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(postCartFailure(err))
    })
}

export const getCart=()=>(dispatch)=>{
    dispatch(getCartRequiest())
    return axios({
        url:" http://localhost:8000/cart",
        method:"GET",
    })
    .then((res)=>{
        dispatch(getCartSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getCartFailure(err))
    })
}

export const patchCart=(id,data)=>(dispatch)=>{
    dispatch(patchCartRequiest())
    return axios({
        url:` http://localhost:8000/cart/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchCartSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(patchCartFailure(err))
    })
}