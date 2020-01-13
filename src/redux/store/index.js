import {createStore, combineReducers} from "redux";
import fReducer from "../reducers/fReducer";

let reducers = combineReducers({
    freducer: fReducer,
});

let store = createStore(reducers);

export default store;