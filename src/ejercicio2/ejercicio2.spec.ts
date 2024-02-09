import {getMovieInfoByName, MovieInfo} from './ejercicio2'

test('#ejercicio2', async () => {
   const movie: MovieInfo = await getMovieInfoByName('joker')
   expect(movie.name).toBe('Joker')
   expect(movie.year).toBe('2019')
   expect(movie.genre).toBe('Crime, Drama, Thriller')
   expect(movie.country).toBe('United States, Canada, Australia')
   expect(movie.metacriticRating).toBe('59/100')
})
