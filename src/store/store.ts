import {combineReducers, configureStore} from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userReducer from "./reducers/userReducer";
import filmReducer from "./reducers/filmReducer";


const appReducer = combineReducers({taskReducer, userReducer, filmReducer})


export const store = configureStore({
    reducer: appReducer
})


export type AppStateType = ReturnType<typeof appReducer>
export type AppDispatchType = typeof store.dispatch

export const useAppDispatch: ()=> AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector