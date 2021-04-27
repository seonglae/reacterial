import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { reducer, name } from "./reducers/reducer"

const rootReducer = combineReducers({ [name]: reducer })
const store = configureStore({
  reducer: rootReducer,
})

export default store
