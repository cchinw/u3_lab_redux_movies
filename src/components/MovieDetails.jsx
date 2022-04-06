import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { LoadMovieDetails } from "../store/actions/MovieActions"
import { Link } from "react-router-dom"


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (id) => dispatch(LoadMovieDetails())
  }
}

const mapStateToProps = ({movieDetailsState}) => {
  return {movieDetailsState}
}



const MovieDetails = (props) => {
  console.log(props, 'DETAILSSSS')
  let {id} = useParams()

  useEffect(() => {
    props.fetchMovies(id)
  }, [id])

  return (
    <div>
      {props.movieDetailsState.movies.map((detail) => (
        <div>
        <Link to={`movie/${detail.id}`} key={detail.id}>{detail.title}</Link>
        <img src={detail.poster_path} alt="poster"/>
      </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
