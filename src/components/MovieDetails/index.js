import {Component} from 'react'

import NavBar from '../NavBar'
import MovieItems from '../MovieItems'
import Footer from '../Footer'

import './index.css'

const movieDetailsList = {
  movieDetails: {
    adult: false,
    backdropPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-background-v0.png',
    budget: '11 Crores',
    genres: [
      {
        id: 'af2384dc-494b-48a7-a94d-91e6b279f20b',
        name: 'Science Fiction',
      },
      {
        id: '16106068-2d4e-438f-8a9a-fa0b91e4246a',
        name: 'Action',
      },
      {
        id: '0c29016b-ff7f-4d67-8f95-f8681bc7ff1c',
        name: 'Adventure',
      },
    ],
    id: '51b4602f-b0f2-4c81-98e0-a2a409b13926',
    overview:
      'Super villains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle ',
    posterPath:
      'https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-poster.png',
    release_date: '2021-09-30',
    runtime: 97,
    similarMovies: [
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
    ],
    spokenLanguages: [
      {
        id: '4bc5f2cf-04d6-4064-bd0d-fc927fda507d',
        language: 'English',
      },
      {
        id: '4bc5f2cf-04d6-4064-bd0d-fc927fda507',
        language: 'Telugu',
      },
      {
        id: '4bc5f2cf-04d6-4064-bd0d-fc92fda507d',
        language: 'Hindi',
      },
    ],
    title: 'Venom',
    voteAverage: 6.8,
    voteCount: 1514,
  },
}

const AvailableLanguages = props => {
  const {eachItem} = props
  const {language} = eachItem
  return <li className="info-items list-item">{language}</li>
}

const GenreList = props => {
  const {eachItem} = props
  const {name} = eachItem
  return <li className="info-items list-item">{name}</li>
}

class MovieDetails extends Component {
  render() {
    const {
      title,
      overview,
      genres,
      spokenLanguages,
      adult,
      similarMovies,
    } = movieDetailsList.movieDetails
    const certificateName = adult ? 'A' : 'U/A'
    return (
      <>
        <div className="movie-detail-page">
          <NavBar />
          <div className="movie-detail-movie-page">
            <h1 className="title">{title}</h1>
            <div className="more-details">
              <p className="duration">2h 42m</p>
              <p className="certificate">{certificateName}</p>
              <p className="release-year">2007</p>
            </div>
            <p className="over-view">{overview}</p>
            <button type="button" className="play-btn">
              Play
            </button>
          </div>
        </div>
        <div className="additional-information">
          <div className="movie-info">
            <div className="info">
              <p className="info-heading">Genres</p>
              <ul className="list-items">
                {genres.map(eachItem => (
                  <GenreList eachItem={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
            <div className="info">
              <p className="info-heading">Audio Available</p>
              <ul className="list-items">
                {spokenLanguages.map(eachItem => (
                  <AvailableLanguages eachItem={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
            <div className="info">
              <p className="info-heading">Rating Count</p>
              <p className="info-items info-name">60,020</p>
              <p className="info-heading">Rating Average</p>
              <p className="info-items info-name">4.8</p>
            </div>
            <div className="info info1">
              <p className="info-heading">Budget</p>
              <p className="info-items info-name">60,020 Cores </p>
              <p className="info-heading">Release Date</p>
              <p className="info-items info-name">27th April 2007</p>
            </div>
          </div>
          <div className="similar-movies-container">
            <h1 className="more-like-this-text">More like this</h1>
            <ul className="similar-movies-list">
              {similarMovies.map(eachMovie => (
                <MovieItems eachMovie={eachMovie} key={eachMovie.id} />
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default MovieDetails
