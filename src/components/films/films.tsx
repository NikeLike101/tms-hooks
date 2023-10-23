import React, {useEffect, useState} from "react";
import {Box, Button, Skeleton} from "@mui/material";
import FilmsAutocomplete from "./fimsAutocomplete/filmsAutocomplete";
import {Film} from "../../models/Film";
import {getFilms} from "../../api/services/filmsService/service";
import FilmsTable from "./filmsTable/filmsTable";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setFavoriteFilmsToStore, setFilmsToStore} from "../../store/reducers/filmReducer/actions";
import {useNavigate} from "react-router-dom";
import {routeLocationsEnum} from "../../router/Router";


const Films: React.FC = props => {

    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const {films} = useAppSelector(state => state.filmReducer)

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        // getFilms().then(response => setFilms(response))
        console.log('zxcxzc')
        setIsLoading(true)
        const getData = async () => {
            const data = await getFilms()
            console.log(data, 'data')

            dispatch(setFilmsToStore(data))
            dispatch(setFavoriteFilmsToStore(data.filter(film => film.isLiked)))
            setIsLoading(false)
        }
        getData()
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