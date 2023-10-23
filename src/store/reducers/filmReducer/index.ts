import {Reducer} from "@reduxjs/toolkit";
import {User} from "../../../models/User";
import {FilmReducerEnum} from "./actionTypes";
import {Film} from "../../../models/Film";


type FilmReducerType = {
    films: Film[]
    favoriteFilms: Film[]
    selectedFilm: Film | undefined
}

const defaultState:FilmReducerType = {
    films: [],
    favoriteFilms: [],
    selectedFilm: undefined
}


const filmReducer: Reducer<FilmReducerType> = (state = defaultState, action) => {
    console.log(action, 'in store 1')
    switch (action.type) {
        case FilmReducerEnum.SET_FILMS:
            console.log('in store', action)
            return {...state, films: action.films}
        case FilmReducerEnum.SET_FAVORITE_FILMS:
            return {...state, favoriteFilms: action.favoriteFilms}
        case FilmReducerEnum.SET_SELECTED_FILM:
            return {...state,
                selectedFilm:
                    state.films.find(({label}) => label === action.filmLabel)
            }
        default:
            return {...state}
    }
}

export default filmReducer