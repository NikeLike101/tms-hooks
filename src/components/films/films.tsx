import React, {useEffect, useState} from "react";
import {Box, Skeleton} from "@mui/material";
import FilmsAutocomplete from "./fimsAutocomplete/filmsAutocomplete";
import {Film} from "../../models/Film";
import {getFilms} from "../../api/services/filmsService/service";
import FilmsTable from "./filmsTable/filmsTable";


const Films: React.FC = props => {

    const [films, setFilms] = useState<Film[] | undefined>(undefined);

    useEffect(() => {
        // getFilms().then(response => setFilms(response))
        console.log('zxcxzc')
        const getData = async () => {
            const data = await getFilms()
            console.log(data, 'data')
            setFilms(data)
        } 
        getData()
    }, []);

    return <Box sx={{
        marginTop: '10px'}}>
        {films !== undefined ? <>
            <FilmsAutocomplete films={films}/>

            <FilmsTable films={films}/>

        </> : <Skeleton sx={{transform: 'scale(1)'}} width={400} height={56}/>
            }
    </Box>
}

export default Films