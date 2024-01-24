import { POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./authAction"



const initState={
    isError:false,
    isLoading:false
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getAuthData:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false,
                    })




                    default:
                        return({
                            ...state
                        })
    }
}