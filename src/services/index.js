import Axios from 'axios'

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const Client = Axios.create({
  baseURL: `https://api.themoviedb.org/3`
})

export default Client
