import {Action, Reducer} from "@reduxjs/toolkit";
import {FilmReducerEnum} from "./actionTypes";
import {Film} from "../../../models/Film";


type FilmReducerType = {
    films: Film[]
    favoriteFilms: Film[]
    selectedFilm: Film | undefined
    comments: Comment[]
}

const defaultState:FilmReducerType = {
    films: [],
    favoriteFilms: [],
    selectedFilm: undefined,
    comments: []
}


const filmReducer: Reducer<FilmReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case FilmReducerEnum.SET_FILMS:
            return {...state, films: action.films}
        case FilmReducerEnum.SET_FAVORITE_FILMS:
            return {...state, favoriteFilms: action.favoriteFilms}
        case FilmReducerEnum.SET_SELECTED_FILM:
            return {...state,
                selectedFilm: action.selectedFilm
            }
        case FilmReducerEnum.SET_COMMENTS:
            return {...state, comments: action.comments}
        default:
            return {...state}
    }
}

export default filmReducer