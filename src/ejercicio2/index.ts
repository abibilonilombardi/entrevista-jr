import {getMovieInfoByName} from "./ejercicio2";

(async () => {
    const response = await getMovieInfoByName('joker')
    console.log(response)
})()