import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import accountReducer from "./reducers/AccountReducer";

export default createStore(
    combineReducers({
        accountReducer
    }),
    {},
    applyMiddleware( thunk, promise())
);