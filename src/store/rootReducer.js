import { combineReducers } from "redux";
import { productReducer } from "./product.reducer";
import { countReducer } from "./Cart/cart.reducer";



export const rootReducer = combineReducers({
    product : productReducer,
    counter : countReducer,
})