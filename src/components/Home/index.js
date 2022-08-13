import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import {IoIosWarning} from 'react-icons/io'
import Loader from 'react-loader-spinner'

import NavBar from '../NavBar'
import HomeMovieItems from '../HomeMovieItems'
import Footer from '../Footer'

import './index.css'

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

const renderOriginalsConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  loading: 'LOADING',
}
const renderTrendingConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  loading: 'LOADING',
}
const renderPosterConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  loading: 'LOADING',
}

const isHome = true

class Home extends Component {
  state = {
    renderOriginalsStatus: renderOriginalsConstraints.initial,
    renderTrendingStatus: renderOriginalsConstraints.initial,
    renderPosterStatus: renderPosterConstraints.initial,
    randomMovie: {},
    originalMoviesList: [],
    trendingMoviesList: [],
  }

  componentDidMount() {
    this.getTrendingMoviesData()
    this.getOriginalMoviesData()
  }

  getOriginalMoviesData = async () => {
    this.setState({
      renderOriginalsStatus: renderOriginalsConstraints.loading,
      renderPosterStatus: renderOriginalsConstraints.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const originalsDataApi = 'https://apis.ccbp.in/movies-app/originals'
    const response = await fetch(originalsDataApi, options)
    if (response.ok) {
      const data = await response.json()

      const fetchedOriginalsData = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        overview: eachMovie.overview,
        posterPath: eachMovie.poster_path,
        title: eachMovie.title,
      }))
      const randomNumber = Math.floor(Math.random() * 10)
      const randomMovie = fetchedOriginalsData[randomNumber]
      this.setState({
        originalMoviesList: fetchedOriginalsData,
        renderOriginalsStatus: renderOriginalsConstraints.success,
        randomMovie,
        renderPosterStatus: renderOriginalsConstraints.success,
      })
    } else {
      this.setState({
        renderOriginalsStatus: renderOriginalsConstraints.fail,
        renderPosterStatus: renderOriginalsConstraints.fail,
      })
    }
  }

  retryOriginalsMoviesData = () => {
    this.getOriginalMoviesData()
  }

  getTrendingMoviesData = async () => {
    this.setState({renderTrendingStatus: renderTrendingConstraints.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const trendingDataApi = 'https://apis.ccbp.in/movies-app/trending-movies'
    const response = await fetch(trendingDataApi, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedTrendingData = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        overview: eachMovie.overview,
        posterPath: eachMovie.poster_path,
        title: eachMovie.title,
      }))
      this.setState({
        trendingMoviesList: fetchedTrendingData,
        renderTrendingStatus: renderTrendingConstraints.success,
      })
    } else {
      this.setState({renderTrendingStatus: renderTrendingConstraints.fail})
    }
  }

  retryTrendingMoviesData = () => {
    this.getTrendingMoviesData()
  }

  renderPosterSuccessView = () => {
    const {randomMovie} = this.state
    const {title, overview, backdropPath} = randomMovie

    return (
      <div
        style={{backgroundImage: `url(${backdropPath})`}}
        className="home-page"
      >
        <NavBar isHome={isHome} />
        <div className="home-movie-page">
          <h1 className="title">{title}</h1>
          <h1 className="over-view">{overview}</h1>
          <button type="button" className="play-btn">
            Play
          </button>
        </div>
      </div>
    )
  }

  renderOriginalsSuccessView = () => {
    const {originalMoviesList} = this.state
    return (
      <>
        <div className="movies-list-page">
          <Slider className="slick" {...settings}>
            {originalMoviesList.map(eachMovie => (
              <HomeMovieItems eachMovie={eachMovie} key={eachMovie.id} />
            ))}
          </Slider>
        </div>
      </>
    )
  }

  renderTrendingSuccessView = () => {
    const {trendingMoviesList} = this.state

    return (
      <>
        <div className="movies-list-page">
          <Slider className="slick" {...settings}>
            {trendingMoviesList.map(eachMovie => (
              <HomeMovieItems eachMovie={eachMovie} key={eachMovie.id} />
            ))}
          </Slider>
        </div>
      </>
    )
  }

  renderPosterErrorView = () => (
    <>
      <NavBar />
      <div className="error-page-container">
        <div className="error-page">
          <IoIosWarning className="warning-icon" />
          <p className="poster-error-msg">
            Something went wrong. Please try again
          </p>
          <button
            onClick={this.retryOriginalsMoviesData}
            className="poster-try-again-btn"
            type="button"
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  )

  renderOriginalsErrorView = () => (
    <div className="error-page-container">
      <div className="thumbnail-error-page">
        <IoIosWarning className="thumbnail-warning-icon" />
        <p className="thumbnail-error-msg">
          Something went wrong. Please try again
        </p>
        <button
          onClick={this.retryOriginalsMoviesData}
          className="thumbnail-try-again-btn"
          type="button"
        >
          Try Again
        </button>
      </div>
    </div>
  )

  renderTrendingErrorView = () => (
    <div className="error-page-container">
      <div className="thumbnail-error-page">
        <IoIosWarning className="thumbnail-warning-icon" />
        <p className="thumbnail-error-msg">
          Something went wrong. Please try again
        </p>
        <button
          onClick={this.retryTrendingMoviesData}
          className="thumbnail-try-again-btn"
          type="button"
        >
          Try Again
        </button>
      </div>
    </div>
  )

  renderPosterLoadingView = () => (
    <>
      <NavBar />
      <div className="error-page-container">
        <div className="error-page">
          <div className="loader-container" testid="loader">
            <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
          </div>
        </div>
      </div>
    </>
  )

  renderThumbnailLoadingView = () => (
    <div className="error-page-container">
      <div className="thumbnail-error-page">
        <div className="loader-container" testid="loader">
          <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
        </div>
      </div>
    </div>
  )

  renderOriginalsSwitchViews = () => {
    const {renderOriginalsStatus} = this.state
    switch (renderOriginalsStatus) {
      case renderOriginalsConstraints.loading:
        return this.renderThumbnailLoadingView()
      case renderOriginalsConstraints.success:
        return this.renderOriginalsSuccessView()
      case renderOriginalsConstraints.fail:
        return this.renderOriginalsErrorView()
      default:
        return null
    }
  }

  renderTrendingSwitchViews = () => {
    const {renderTrendingStatus} = this.state
    switch (renderTrendingStatus) {
      case renderTrendingConstraints.loading:
        return this.renderThumbnailLoadingView()
      case renderTrendingConstraints.success:
        return this.renderTrendingSuccessView()
      case renderTrendingConstraints.fail:
        return this.renderTrendingErrorView()
      default:
        return null
    }
  }

  renderPosterSwitchViews = () => {
    const {renderPosterStatus} = this.state
    switch (renderPosterStatus) {
      case renderPosterConstraints.loading:
        return this.renderPosterLoadingView()
      case renderPosterConstraints.success:
        return this.renderPosterSuccessView()
      case renderPosterConstraints.fail:
        return this.renderPosterErrorView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        {this.renderPosterSwitchViews()}
        <h1 className="movie-section-name">Trending Now</h1>
        {this.renderTrendingSwitchViews()}
        <h1 className="movie-section-name">Originals</h1>
        {this.renderOriginalsSwitchViews()}
        <Footer />
      </>
    )
  }
}

export default Home
