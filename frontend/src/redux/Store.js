import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./Auth/Reducer";
import { ProjectReducer } from "./Project/Reducer";
import { ChatReducer } from "./Chat/Reducer";
import { CommentReducer } from "./Comment/Reducer";
import { IssueReducer } from "./Issue/Reducer";
import { SubscriptionReducer } from "./Subscription/Reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "subscription"]
};

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    chat: ChatReducer,
    comment: CommentReducer,
    issue: IssueReducer,
    subscription: SubscriptionReducer,
})

const persitedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persitedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);