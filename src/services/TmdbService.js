import Client from './'

const API_KEY = process.env.REACT_APP_WENDY_KEY

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const GetMovies = async () => {
  try {
    const res = await Client.get(`/discover/movie?api_key=${API_KEY}`)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (movieId) => {
  try {
    const res = await Client.get(`/movie/${movieId}?api_key=${API_KEY}`)
    return res.data
  } catch (error) {
    throw error
  }
}
