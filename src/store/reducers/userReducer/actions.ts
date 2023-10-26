import {User} from "../../../models/User";
import {UserReducerEnum} from "./actionTypes";
import {Dispatch} from "@reduxjs/toolkit";
import {AppDispatchType} from "../../store";
import {getAllComments, getFilms} from "../../../api/services/filmsService/service";
import {getTodos} from "../../../api/services/todoService/service";
import {setCommentsToStore, setFilmsToStore} from "../filmReducer/actions";
import {setTasks} from "../taskReducer";


export const getInitialValue = () => async (dispatch: AppDispatchType) => {

   const [dataFilms, dataComments, dataTodos] =  await Promise.all([getFilms(), getAllComments(), getTodos()])
    dispatch(setFilmsToStore(dataFilms))
    dispatch(setCommentsToStore(dataComments))
    dispatch(setTasks(dataTodos))

}



export const setUserDataToStore = (userData: User) => {
    return {type: UserReducerEnum.LOGIN, userData}
}
export const clearUserDataFromStore = () => {
    return {type: UserReducerEnum.LOGOUT}
}