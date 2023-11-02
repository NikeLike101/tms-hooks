import {FilmReducerEnum} from "./actionTypes";
import {Film} from "../../../models/Film";
import {getFilms} from "../../../api/services/filmsService/service";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

export const getFilmsDataAction = () => {
    return async (dispatch: Dispatch<AnyAction>) => {

        if (dispatch === undefined) return
        const data = await getFilms()
        dispatch(setFilmsToStore(data))
        dispatch(setFavoriteFilmsToStore(data.filter(film => film.isLiked)))
    }
}



export const setFilmsToStore = (films: Film[]) => {
    return {type: FilmReducerEnum.SET_FILMS, films}
}
export const setFavoriteFilmsToStore = (favoriteFilms: Film[]) => {
    return {type: FilmReducerEnum.SET_FAVORITE_FILMS, favoriteFilms}
}
export const setSelectedFilmByLabel = (selectedFilm: Film) => {
    return {type: FilmReducerEnum.SET_SELECTED_FILM, selectedFilm}
}

export const setCommentsToStore = (comments: Comment[]) => {
    return {type: FilmReducerEnum.SET_COMMENTS, comments}
}