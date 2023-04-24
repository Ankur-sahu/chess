import { legacy_createStore as createStore } from "redux";
import { reducer } from "./CombineReducer";
const store = createStore(reducer)
export default store;
