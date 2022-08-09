import {Component} from 'react'
import Slider from 'react-slick'

import NavBar from '../NavBar'
import Footer from '../Footer'

import './index.css'

const randomMovie = {
  backdropPath:
    'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png',
  id: 'efb33428-5527-44d0-a713-1aeef4d56968',
  overview:
    "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
  posterPath:
    'https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png',
  title: 'Death Proof',
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

class Home extends Component {
  render() {
    const {title, overview, backdropPath} = randomMovie
    return (
      <>
        <div>
          <div className="home-page">
            <NavBar />
            <div className="home-movie-page">
              <h1 className="title">{title}</h1>
              <p className="over-view">{overview}</p>
              <button type="button" className="play-btn">
                Play
              </button>
            </div>
          </div>
          <div className="movies-list-page">
            <h1 className="movie-section-name">Trending Now</h1>
            <Slider className="slick" {...settings}>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
            </Slider>
            <h1 className="movie-section-name">Originals</h1>
            <Slider className="slick slick1" {...settings}>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
              <div>
                <img className="thumbnail-img" alt={title} src={backdropPath} />
              </div>
            </Slider>
          </div>

          <Footer />
        </div>
      </>
    )
  }
}

export default Home
