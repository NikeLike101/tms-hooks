import {Film} from "../../../models/Film";
import {films} from "../../../data/films";


export const getFilms = async () => {
    const newFilms:Film[] =await new Promise((resolve) => {
        const timer = setTimeout(() => {


            resolve(films as Film[])

            clearTimeout(timer)
        }, 1000)
    })

    return newFilms
}