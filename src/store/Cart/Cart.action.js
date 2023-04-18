//Constants
import { ADDED_PRODUCT, COUNT_DECREASE , COUNT_INCREASE, DELETE_PRODUCT, PAYMENT } from "./cart.constants";

export function decreaseCount(payload){
    return {
        type: COUNT_DECREASE,
        payload,
    }
}

export function increaseCount(payload){
    return {
        type: COUNT_INCREASE,
        payload,
    }
}

export function addedProduct(payload){
    return {
        type: ADDED_PRODUCT,
        payload
    }
}

export function deleteProduct(payload){
    return {
        type: DELETE_PRODUCT,
        payload,
    }
}

export function paymentProduct(payload){
    return {type: PAYMENT,
    payload,
    }


}

