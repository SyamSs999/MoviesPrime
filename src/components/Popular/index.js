import {Component} from 'react'
import Loader from 'react-loader-spinner'

import NavBar from '../NavBar'
import MovieItems from '../MovieItems'
import Footer from '../Footer'
import FailurePage from '../FailurePage'

import './index.css'

const popularItemsList = [
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
    id: '92c2cde7-d740-443d-8929-0106cb0305',
    overview:
      'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png',
    title: 'No Time to Die',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '046084e1-a782-406-b723-fc5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'ef33428-5527-44d0-a713-1af4d5668',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '046084e1-782-4086-b723-f9c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'efb33428-5527-4d0-a713-1aeef4d6968',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png',
    id: 'c6ef2389-078a-4117-b2dd-1dee027ee8e',
    overview:
      'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-poster.png',
    title: 'Dune',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-background-v0.png',
    id: '92c2cd7-d740-443d-8929-010b46cb0305',
    overview:
      'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png',
    title: 'No Time to Die',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '04084e1-a782-406-b723-f98c5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'ef3428-5527-44d0-a713-1aeef4d5668',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png',
    id: '04684e1-782-4086-b723-f98c5c57ebc0',
    overview:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
    id: 'efb3428-5527-4d0-a713-1aeef4d56968',
    overview:
      "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
    title: 'Death Proof',
  },
]

const isPopular = true

class Popular extends Component {
  renderFailureView = () => <FailurePage />

  renderSuccessView = () => (
    <>
      <ul className="popular-items">
        {popularItemsList.map(eachMovie => (
          <MovieItems eachMovie={eachMovie} key={eachMovie} />
        ))}
      </ul>
      <Footer />
    </>
  )

  renderLoaderView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  render() {
    return (
      <div>
        <NavBar isPopular={isPopular} />
        {this.renderSuccessView()}
      </div>
    )
  }
}

export default Popular
