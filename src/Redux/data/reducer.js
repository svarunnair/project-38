import { GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUIEST, GET_DETAIL_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUIEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"




const initState={
    isError:false,
    isLoading:false,
    getMainData:[],
    getDetailData:[],
    postCartData:[],
    getCartData:[],
    patchCartData:[],

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
      case GET_DATA_REQUIEST:
        return({
            ...state,
            isError:false,
            isLoading:true
        })
        case GET_DATA_SUCCESS:
        return({
            ...state,
            isError:false,
            isLoading:false,
            getMainData:action.payload
        })
        case GET_DATA_REQUIEST:
        return({
            ...state,
            isError:true,
            isLoading:false
        })

        case GET_DETAIL_REQUIEST:
        return({
            ...state,
            isError:false,
            isLoading:true
        })
        case GET_DETAIL_SUCCESS:
        return({
            ...state,
            isError:false,
            isLoading:false,
            getDetailData:action.payload
        })
        case GET_DETAIL_FAILURE:
        return({
            ...state,
            isError:true,
            isLoading:false
        })


        case POST_CART_REQUIEST:
        return({
            ...state,
            isError:false,
            isLoading:true
        })
        case POST_CART_SUCCESS:
        return({
            ...state,
            isError:false,
            isLoading:false,
            postCartData:action.payload
        })
        case POST_CART_FAILURE:
        return({
            ...state,
            isError:true,
            isLoading:false
        })

        case GET_CART_REQUIEST:
        return({
            ...state,
            isError:false,
            isLoading:true
        })
        case GET_CART_SUCCESS:
        return({
            ...state,
            isError:false,
            isLoading:false,
            getCartData:action.payload
        })
        case GET_CART_FAILURE:
        return({
            ...state,
            isError:true,
            isLoading:false
        })

        case PATCH_CART_REQUIEST:
        return({
            ...state,
            isError:false,
            isLoading:true
        })
        case PATCH_CART_SUCCESS:
        return({
            ...state,
            isError:false,
            isLoading:false,
            patchCartData:action.payload
        })
        case PATCH_CART_FAILURE:
        return({
            ...state,
            isError:true,
            isLoading:false
        })





        default:
            return({
                ...state
            })
    }
}