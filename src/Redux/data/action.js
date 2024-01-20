import axios from "axios"


export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const GET_DETAIL_REQUIEST="GET_DETAIL_REQUIEST"
export const GET_DETAIL_SUCCESS="GET_DETAIL_SUCCESS"
export const GET_DETAIL_FAILURE="GET_DETAIL_FAILURE"


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
