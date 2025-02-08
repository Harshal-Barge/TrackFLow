import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./Auth/Reducer";

const rootReducer = combineReducers({
    auth: AuthReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))