import { FETCH_USERS_REQUEST, FETCH_USER_FAILURE,FETCH_USER_SUCCESS } from "./product.constants";
import axios from "axios"

function FetchUserRequest(){
    return {
        type: FETCH_USERS_REQUEST,
    }
}

function FetchUserSuccess(data){
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

function FetchUserFailure(error){
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const BASE_URL = "https://fakestoreapi.com/products"

export function fetchProduct(){
    return (dispatch)=>{
        dispatch(FetchUserRequest)
        axios.get(BASE_URL)
        .then((response)=>{
            const product = response.data
            dispatch(FetchUserSuccess(product))
        })
        .catch((error)=>{
            const errorMsg = error.msg;
            dispatch(FetchUserFailure(errorMsg))
        })
    }
}