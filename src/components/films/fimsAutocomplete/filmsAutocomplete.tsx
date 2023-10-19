import {Film} from "../../../models/Film";
import React, {useEffect} from "react";
import {Autocomplete, TextField} from "@mui/material";
import useThemeColors from "../../../hooks/useThemeColors";


interface Props {
    films: Film[]
}

const FilmsAutocomplete:React.FC<Props> = props => {
    const {films} = props
    const colors = useThemeColors()

    useEffect(() => {
        console.log(films)
    }, [films]);
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