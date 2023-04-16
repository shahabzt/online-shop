import { ADDED_PRODUCT, COUNT_DECREASE, COUNT_INCREASE, DELETE_PRODUCT, PAYMENT } from "./cart.constants";


const initialState = {
    count: 0,
    result: [],
    payment : 0
}
export function countReducer(state = initialState, action) {
    switch (action.type) {
        case COUNT_INCREASE:
            return {
                ...state,
                count: state.count + 1,
            }
        case COUNT_DECREASE:
            return { ...state, count: state.count - 1 }
        case ADDED_PRODUCT:
            return {
                ...state,
                result: [...state.result, action.payload]
            }

        case DELETE_PRODUCT:
            const newResult = state.result.filter((res) => {
                return res.id !== action.payload.id
            })
            return {
                ...state,
                result: newResult
            }
            case PAYMENT:
                return {
                    ...state,
                    paymant: action.payload +=state.payment
                }
        default:
            return state;
    }

}