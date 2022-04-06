const { MOVIE_LOADING_TYPE, GET_MOVIES } = require('../types')

const initialState = {
  movies: [],
  moviesLoading: ''
}

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LOADING_TYPE:
      return { ...state, moviesLoading: action.payload }
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}

export default MovieReducer
