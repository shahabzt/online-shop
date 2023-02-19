import { FETCH_USERS_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./product.constants"

const initialState = {
    isLoading: false,
    product: [],
    error: ""
}
export function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case FETCH_USER_SUCCESS: {
            return {
                isLoading: false,
                product: action.payload,
            }
        }

        case FETCH_USER_FAILURE: {
            return {
                isLoading: false,
                product: [],
                error: action.payload
            }
        }

        default:
            return state;
    }
}