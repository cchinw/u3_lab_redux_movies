import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>TMDB Library with React Redux and Thunk</h3>
      <div className="flex-row">
        <div className="movies"></div>
        <div className="details">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
