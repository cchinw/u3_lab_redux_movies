import Client from './'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_WENDY_KEY

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const GetMovies = async () => {
  console.log(API_KEY)
  try {
    const res = await Client.get(
      `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
    console.log(res.data)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (id) => {
  try {
    const res = await Client.get(
      `movie/${id}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
    console.log(res.data.results, 'MOVIE DETAILS API')
    return res.data.results
  } catch (error) {
    throw error
  }
}
