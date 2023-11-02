import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userReducer from "./reducers/userReducer";
import filmReducer from "./reducers/filmReducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import drawerReducer from "./reducers/drawerReducer";
import blogUsersReducer from "./reducers/blogUsersReducer/index";
import productsReducer from "./reducers/productsReducer";
import createSagaMiddleware from "redux-saga";
import {productsWatcher} from "./saga/productsSaga";
import {filmsWatcher} from "./saga/filmsSaga";
import {appWatcher} from "./saga";


const appReducer = combineReducers({taskReducer, userReducer, filmReducer, drawerReducer, blogUsersReducer, productsReducer})


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({

    reducer: appReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), thunk, sagaMiddleware]
})

sagaMiddleware.run(appWatcher)

export type AppStateType = ReturnType<typeof appReducer>
export type AppDispatchType = ThunkDispatch<AppStateType, null, AnyAction>

export const useAppDispatch: ()=> AppDispatchType= useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector