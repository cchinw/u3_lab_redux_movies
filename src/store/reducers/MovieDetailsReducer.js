const { GET_MOVIE_DETAILS } = require('../types')

const initialState = {
  movies: []
}

const MovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailsReducer
