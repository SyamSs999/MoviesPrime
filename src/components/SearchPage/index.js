import {Component} from 'react'

import NavBar from '../NavBar'
import MovieItems from '../MovieItems'
import FailurePage from '../FailurePage'

import './index.css'

const searchItems = [
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png',
    id: 'c6ef2389-078a-4117-b2dd-1dee027e5e8e',
    overview:
      'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-poster.png',
    title: 'Dune',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-background-v0.png',
    id: '92c2cde7-d740-443d-8929-010b46cb0305',
    overview:
      'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png',
    title: 'No Time to Die',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '046084e1-a782-406-b723-f98c5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'ef33428-5527-44d0-a713-1aeef4d5668',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '046084e1-782-4086-b723-f98c5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'efb33428-5527-4d0-a713-1aeef4d56968',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png',
    id: 'c6ef2389-078a-4117-b2dd-1dee027e5e8e',
    overview:
      'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-poster.png',
    title: 'Dune',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-background-v0.png',
    id: '92c2cde7-d740-443d-8929-010b46cb0305',
    overview:
      'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png',
    title: 'No Time to Die',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '046084e1-a782-406-b723-f98c5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'ef33428-5527-44d0-a713-1aeef4d5668',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '046084e1-782-4086-b723-f98c5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'efb33428-5527-4d0-a713-1aeef4d56968',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
]

class SearchPage extends Component {
  renderSearchSuccess = () => (
    <ul className="search-items">
      {searchItems.map(eachMovie => (
        <MovieItems eachMovie={eachMovie} key={eachMovie.id} />
      ))}
    </ul>
  )

  renderNoResultsView = () => (
    <div className="no-results-view">
      <img
        className="no-results-img"
        alt="no results"
        src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660129363/Group_7394_uensih.png"
      />
      <p className="no-results-text">
        Your search for dsadsdsada did not find any matches.
      </p>
    </div>
  )

  renderFailureView = () => <FailurePage />

  render() {
    return (
      <>
        <NavBar searchRoute={8 > 0} />
        <div className="search-container">{this.renderNoResultsView()}</div>
      </>
    )
  }
}

export default SearchPage
