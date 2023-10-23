import {User} from "../../../models/User";
import {FilmReducerEnum} from "./actionTypes";
import {Film} from "../../../models/Film";


export const setFilmsToStore = (films: Film[]) => {
    return {type: FilmReducerEnum.SET_FILMS, films}
}
export const setFavoriteFilmsToStore = (favoriteFilms: Film[]) => {
    return {type: FilmReducerEnum.SET_FAVORITE_FILMS, favoriteFilms}
}
export const setSelectedFilmByLabel = (filmLabel: string) => {
    return {type: FilmReducerEnum.SET_SELECTED_FILM, filmLabel}
}