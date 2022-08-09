import {Component} from 'react'

import NavBar from '../NavBar'
import PopularItems from '../PopularItems'
import Footer from '../Footer'

import './index.css'

const popularItemsList = [
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/ghostbusters-afterlife-british-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
  },
]

class Popular extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ul className="popular-items">
          {popularItemsList.map(eachMovie => (
            <PopularItems eachMovie={eachMovie} key={eachMovie} />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Popular
