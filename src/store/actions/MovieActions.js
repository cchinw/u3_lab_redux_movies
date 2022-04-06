import { GetMovies, GetMovieDetails } from '../../services/TmdbService'
import { GET_MOVIES, GET_MOVIE_DETAILS, MOVIE_LOADING_TYPE } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      // console.log(movies)
      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetMovieDetails(id)
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}
