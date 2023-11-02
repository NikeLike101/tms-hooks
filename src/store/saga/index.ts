import { all } from "redux-saga/effects";
import {productsWatcher} from "./productsSaga";
import {filmsWatcher} from "./filmsSaga";


export function* appWatcher() {
    yield all([
        productsWatcher(),
        filmsWatcher()
    ])
}