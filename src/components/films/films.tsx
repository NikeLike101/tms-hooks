import React, {useEffect, useState} from "react";
import {Box, Button, Skeleton} from "@mui/material";
import FilmsAutocomplete from "./fimsAutocomplete/filmsAutocomplete";
import {Film} from "../../models/Film";
import {getFilms} from "../../api/services/filmsService/service";
import FilmsTable from "./filmsTable/filmsTable";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getFilmsDataAction, setFavoriteFilmsToStore, setFilmsToStore} from "../../store/reducers/filmReducer/actions";
import {useNavigate} from "react-router-dom";
import {routeLocationsEnum} from "../../router/Router";
import {useDispatch} from "react-redux";


const Films: React.FC = props => {

    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const {films} = useAppSelector(state => state.filmReducer)

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const setLimitedLengthOfData = (length: number) => {
        // const hello = 'hello'+newString
        return (data: Film[]) => setFilmsToStore(data.length > length ? data.slice(length) : data)


        // return (newValue: number) => {
        //     return `${hello.length} + ${newValue} = ${hello.length + newValue} : ${hello}`
        // }
    }


    useEffect(() => {
        // getFilms().then(response => setFilms(response))
        console.log('zxcxzc')
        console.log(
            // getSmth('qwer')(12)
        )

        dispatch(getFilmsDataAction())
    }, []);


    return <Box sx={{
        marginTop: '10px'}}>
        {films ? !isLoading ? <>
            <Button onClick={() => navigation(routeLocationsEnum.favoriteFilms)}>Go to favorite</Button>
            <FilmsAutocomplete/>

            <FilmsTable />

        </> : <Skeleton sx={{transform: 'scale(1)'}} width={400} height={56}/>

        : <>films not found</>
        }
    </Box>
}

export default Films