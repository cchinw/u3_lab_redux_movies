import React, { useEffect } from 'react'
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStatetoProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails : (id) => dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {
    let { id } = useParams()
    console.log(props, "MOVIE DETAILS PROPS FINAL")
    useEffect(() => {
        props.fetchMovieDetails(id)
    }, [id])

    return (
    <div className="movie-details-container">
      <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${props.movieDetailsState.movieDetails.poster_path}`} alt={props.movieDetailsState.movieDetails.title} />
       <p>{ props.movieDetailsState.movieDetails.title }</p>
       <p>Release Date: {props.movieDetailsState.movieDetails.release_date }</p>
       <p>Runtime: {props.movieDetailsState.movieDetails.runtime} minutes</p>
       <p>Budget: $ {props.movieDetailsState.movieDetails.budget}</p>
       <p>Revenue: $ {props.movieDetailsState.movieDetails.revenue}</p>
       <p>Average Rating: {props.movieDetailsState.movieDetails.vote_average}/10</p>
       <p>Overview: {props.movieDetailsState.movieDetails.overview}</p>
    </div>
    )


}

export default connect(mapStatetoProps, mapDispatchToProps)(MovieDetails)