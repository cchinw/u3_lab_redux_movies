import { LoadMovies } from "../store/actions/MovieActions"
import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const mapStateToProps = ({movieState}) => {
  return {movieState}
}

const Movies = (props) => {

  console.log(props.movieState.movies, 'MOVIE LIST') 

  useEffect(() => {
    props.fetchMovies()
  }, [])
  return (
    <ul>
      {props.movieState.movies.map((movie) => (
        <div>
          <Link to={`movie`} key={movie.id}>{movie.title}</Link>
          <img src={movie.backdrop_path}/>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </ul>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies)