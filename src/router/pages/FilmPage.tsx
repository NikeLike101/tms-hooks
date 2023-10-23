import { Film } from "../../models/Film";
import {useAppSelector} from "../../store/store";
import React from "react";
import {Rating, Typography} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";


const FilmPage: React.FC = () => {
    const {label, year, rating, isLiked} = useAppSelector(state => state.filmReducer.selectedFilm as Film)


    return <>
        <Typography variant={"h1"}>{label} {year}</Typography>
        <Rating value={rating} precision={.5} disabled/> {isLiked ? <Favorite/> :
        <FavoriteBorder/>}

    </>
}

export default FilmPage