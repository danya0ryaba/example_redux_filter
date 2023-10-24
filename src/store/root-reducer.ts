import { combineReducers } from "redux";
import { filterReducer } from "./filter/filter-reducer";
import { positionsReducer } from "./positions/positions-reducer";


export const rootReducer = combineReducers({
    filter: filterReducer,
    positions: positionsReducer
})