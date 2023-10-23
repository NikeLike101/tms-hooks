import {useAppSelector} from "../../store/store";
import {Paper, Stack} from "@mui/material";
import PageContentWrapper from "../../components/page";


const FavoriteFilms = () => {
    const {favoriteFilms} = useAppSelector(state => state.filmReducer)
    return <PageContentWrapper>
        <Stack>
            {favoriteFilms.map(film => <Paper>{film.label} | {film.year} | {film.rating}</Paper>)}
        </Stack>

    </PageContentWrapper>
}

export default FavoriteFilms