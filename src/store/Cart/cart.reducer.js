import { ADDED_PRODUCT, COUNT_DECREASE, COUNT_INCREASE } from "./cart.constants";


const initialState = {
    count: 0,
    result: [1,2,34]
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
            case ADDED_PRODUCT : 
            return {
                ...state,
                result : action.payload
            }
        default:
            return state;
    }

}