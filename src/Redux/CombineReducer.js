import { combineReducers } from "redux";
import { chessReducer } from "./Reducer";

 export const reducer = combineReducers({
    chess : chessReducer
})
