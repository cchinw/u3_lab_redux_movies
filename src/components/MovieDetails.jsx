import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { LoadMovieDetails } from "../store/actions/MovieActions"


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (id) => dispatch(LoadMovieDetails(id))
  }
}

const mapStateToProps = ({movieDetailsState}) => {
  return {movieDetailsState}
}



const MovieDetails = (props) => {
  console.log(props, 'DETAILSSSS')
  let {id} = useParams()

  useEffect((props) => {
    props.fetchMoviesDetails(id)
  }, [id])

  return (
    <div className="movie-details-container">
       <p>{ props.movieDetailsState.movieDetails.title }</p>
       <p>Release Date: {props.movieDetailsState.movieDetails.release_date }</p>
       <p>Runtime: {props.movieDetailsState.movieDetails.runtime} minutes</p>
       <p>Budget: $ {props.movieDetailsState.movieDetails.budget}</p>
       <p>Revenue: $ {props.movieDetailsState.movieDetails.revenue}</p>
       <p>Average Rating: {props.movieDetailsState.movieDetails.vote_average}/10</p>
       <p>{props.movieDetailsState.movieDetails.overview}</p>
    </div>
)
}
export default connect(mapStateToProps, mapDispatchToProps) (MovieDetails)