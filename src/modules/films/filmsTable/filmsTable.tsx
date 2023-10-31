import {Film} from "../../../models/Film";
import React, {useEffect, useState} from "react";
import {Box, IconButton, Rating, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import useThemeColors from "../../../hooks/useThemeColors";
import {SortDirectionEnum, SortDirectionType} from "./types";
import {ArrowDownward, Favorite, FavoriteBorder} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {useNavigate} from "react-router-dom";
import {
    setFavoriteFilmsToStore,
    setFilmsToStore,
    setSelectedFilmByLabel
} from "../../../store/reducers/filmReducer/actions";


interface Props {
}



enum TableCellForSortEnum {
    year='year',
    rating='rating'
}

type TableCellForSortEnumType = TableCellForSortEnum.rating | TableCellForSortEnum.year

const FilmsTable:React.FC<Props> = props => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const  {films} = useAppSelector(state => state.filmReducer)
    useEffect(() => {
        console.log(films)
    }, [films]);
    const colors = useThemeColors()
    const [sortDirection, setSortDirection] = useState<SortDirectionType>(SortDirectionEnum.asc);
    const [sortField, setSortField] = useState<TableCellForSortEnum.year | TableCellForSortEnum.rating>(TableCellForSortEnum.year);
    const handleChangeSortDirection = (fieldToSort: TableCellForSortEnumType) => {
        if (sortField !== fieldToSort) {
            setSortField(fieldToSort)
            setSortDirection(SortDirectionEnum.asc)
            return
        }
        setSortDirection(prevState => prevState === SortDirectionEnum.desc ? SortDirectionEnum.asc : SortDirectionEnum.desc)
    }

    const sortFunction = (frFilm:Film, scFilm: Film): 1|0|-1 => {



        if (sortDirection === SortDirectionEnum.asc) {
            return frFilm[sortField] === scFilm[sortField] ? 0 :
                 frFilm[sortField] > scFilm[sortField] ? -1 : 1
        }

        if (sortDirection === SortDirectionEnum.desc) {
            return frFilm[sortField] === scFilm[sortField] ? 0 :
                frFilm[sortField] > scFilm[sortField] ? 1 : -1
        }
        return 0
    }


    const handleGoToFilm = (filmLabel: string) => {
        const foundFilm = films.find(film => film.label === filmLabel)
        if (foundFilm === undefined) return
        dispatch(setSelectedFilmByLabel(foundFilm))
        navigation(`/films/${filmLabel}`)
    }
    const handleToggleLikeStatus = (filmLabel: string) => {
        const newFilms:Film[] = [...films.map(film => film.label === filmLabel ? ({...film , isLiked: !film.isLiked}) : film)]
        dispatch(setFilmsToStore(newFilms))
        dispatch(setFavoriteFilmsToStore(newFilms.filter(film => film.isLiked)))
    }
    return <Box>
        <Table>
            <TableHead>
                <TableRow sx={{background: colors.cardText, borderRadius: '5px'}}>
                    <TableCell>
                        name
                    </TableCell>
                    <TableCell  onClick={() =>handleChangeSortDirection(TableCellForSortEnum.year)}>
                        <Box sx={{display: 'flex'}}>
                            year
                            <Box sx={{opacity: sortField === TableCellForSortEnum.year ? 1 : 0,transform: `rotate(${sortDirection === SortDirectionEnum.asc ? 0 : 180}deg)`}}>

                                <ArrowDownward/>
                            </Box>
                        </Box>

                    </TableCell>
                    <TableCell  onClick={() => handleChangeSortDirection(TableCellForSortEnum.rating)}>
                        <Box sx={{display: 'flex'}}>
                        rating
                        <Box sx={{opacity: sortField === TableCellForSortEnum.rating ? 1 : 0 ,transform: `rotate(${sortDirection === SortDirectionEnum.asc ? 0 : 180}deg)`}}>

                            <ArrowDownward/>
                        </Box>
                        </Box>
                    </TableCell>
                    <TableCell>
                        status
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {films.sort(sortFunction).map(film => <TableRow  sx={{background: colors.inputBgHovered, borderRadius: '5px'}} key={film.label}>
                    <TableCell onClick={() => handleGoToFilm(film.label)}>
                        {film.label}
                    </TableCell>
                    <TableCell>
                        {film.year}
                    </TableCell>
                    <TableCell>
                        <Rating value={film.rating} precision={.5} disabled/>

                    </TableCell>
                    <TableCell>
                        <IconButton onClick={() => handleToggleLikeStatus(film.label)}>
                            {film.isLiked ? <Favorite/> :
                                <FavoriteBorder/>}
                        </IconButton>
                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>

    </Box>
}

export default FilmsTable