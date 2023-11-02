import {getFilms} from "../../api/services/filmsService/service";
import {call, put, takeEvery} from "redux-saga/effects";
import {Film} from "../../models/Film";
import {setFavoriteFilmsToStore, setFilmsToStore} from "../reducers/filmReducer/actions";
import {FilmReducerEnum} from "../reducers/filmReducer/actionTypes";


export const getFilmsSaga = () => ({type: FilmReducerEnum.GET_FILMS_SAGA})

function* getFilmsWorker() {
    const films:Film[] = yield call(getFilms)
    yield put(setFilmsToStore(films))
    yield put(setFavoriteFilmsToStore(films.filter(film => film.isLiked)))
}


export function* filmsWatcher() {
    yield takeEvery(FilmReducerEnum.GET_FILMS_SAGA, getFilmsWorker)
}