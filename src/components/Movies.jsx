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
    <div className="list-container">
        {
            props.movieState.movies.map((movie) => (
                <div key={movie.id} className="movie-profile">
                <img className="movie-image" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
                <h3>{movie.title}</h3>
                <Link to={`/movies/${movie.id}`}>View Movie</Link>
                </div>
            ))
        }
    </div>
)
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies)