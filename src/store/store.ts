import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



export const store = configureStore({
    reducer: taskReducer
})


export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export const useAppDispatch: ()=> AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector