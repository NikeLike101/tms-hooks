import {Film} from "../../../models/Film";
import React, {useState} from "react";
import {Box, Rating, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import useThemeColors from "../../../hooks/useThemeColors";
import {SortDirectionEnum, SortDirectionType} from "./types";
import {ArrowDownward} from "@mui/icons-material";


interface Props {
    films: Film[]
}




const FilmsTable:React.FC<Props> = props => {
    const  {films} = props
    const colors = useThemeColors()
    const [sortDirection, setSortDirection] = useState<SortDirectionType>(SortDirectionEnum.asc);
    const [sortField, setSortField] = useState<'year' | 'rating'>("year");
    const handleChangeSortDirection = (fieldToSort: 'year' | 'rating') => {
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

    return <Box>
        <Table>
            <TableHead>
                <TableRow sx={{background: colors.cardText, borderRadius: '5px'}}>
                    <TableCell>
                        name
                    </TableCell>
                    <TableCell  onClick={() =>handleChangeSortDirection('year')}>
                        <Box sx={{display: 'flex'}}>
                            year
                            <Box sx={{opacity: sortField === 'year' ? 1 : 0,transform: `rotate(${sortDirection === SortDirectionEnum.asc ? 0 : 180}deg)`}}>

                                <ArrowDownward/>
                            </Box>
                        </Box>

                    </TableCell>
                    <TableCell  onClick={() => handleChangeSortDirection('rating')}>
                        <Box sx={{display: 'flex'}}>
                        rating
                        <Box sx={{opacity: sortField === 'rating' ? 1 : 0 ,transform: `rotate(${sortDirection === SortDirectionEnum.asc ? 0 : 180}deg)`}}>

                            <ArrowDownward/>
                        </Box>
                        </Box>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {films.sort(sortFunction).map(film => <TableRow sx={{background: colors.inputBgHovered, borderRadius: '5px'}}>
                    <TableCell>
                        {film.label}
                    </TableCell>
                    <TableCell>
                        {film.year}
                    </TableCell>
                    <TableCell>
                        <Rating value={film.rating} precision={.5} disabled/>

                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>

    </Box>
}

export default FilmsTable