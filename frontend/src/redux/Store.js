import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./Auth/Reducer";
import { ProjectReducer } from "./Project/Reducer";
import { ChatReducer } from "./Chat/Reducer";
import { CommentReducer } from "./Comment/Reducer";
import { IssueReducer } from "./Issue/Reducer";
import { SubscriptionReducer } from "./Subscription/Reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    chat: ChatReducer,
    comment: CommentReducer,
    issue: IssueReducer,
    subscription: SubscriptionReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))