import {Film} from "../../../models/Film";
import React, {useEffect} from "react";
import {Autocomplete, TextField} from "@mui/material";
import useThemeColors from "../../../hooks/useThemeColors";
import {useAppSelector} from "../../../store/store";


interface Props {
}

const FilmsAutocomplete:React.FC<Props> = props => {
    const {films} = useAppSelector(state => state.filmReducer)
    const colors = useThemeColors()
    return <><Autocomplete sx={{
        width: '400px',
        background: colors.inputBg,
        border: colors.cardText,
        transition: '.2s all ease-in-out',
        '&.Mui-focused': {
            background: colors.inputBgHovered
        }
    }}  options={films} renderInput={(params) => <TextField {...params}/>}/></>
}

export default FilmsAutocomplete