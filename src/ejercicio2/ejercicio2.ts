export interface MovieInfo {
    /**Título de la película*/
    name: string
    /**Año de la película*/
    year: string
    /**Género de la película*/
    genre: string
    /**País de la película*/
    country: string
    /**Puntaje de la película del sitio Metacritic*/
    metacriticRating: string
}

/**
 Dodo un nombre de pelicula se llama al endpoint http://www.omdbapi.com para obtener los datos de dicha pelicula.
 De todos los datos que se recuperan, se debe devolver el nombre (title), el año (year),el género (genre), el país (country)
 y su puntaje del sitio de metacritic (metacriticRating).
 */
export const getMovieInfoByName = async (name: string): Promise<MovieInfo | null> => {
    const url = `http://www.omdbapi.com/?t=${name}&apikey=6db74018`;
    try {
        const response =  fetch(url, {method: 'POST'});
        //@ts-ignore
        const movie: any = await response.json();
        const name =  movie.Title
        const year = movie.year
        const country = movie.Country
        const metacriticRating = movie.Ratings
        return null
    } catch (error) {
        console.log(error);
        return null
    }
}