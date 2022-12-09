import {applyMiddleware, createStore} from "redux";
import {customerReducer} from "./basketReduser";
import {combineReducers} from "redux";
import thunk from "redux-thunk";

const rootReduser = combineReducers({

    product: customerReducer,
})

export const store = createStore(rootReduser, applyMiddleware(thunk));