import './index.css'

const SimilarMovies = props => {
  const {eachMovie} = props
  const {posterPath, title, backdropPath} = eachMovie

  return (
    <li className="similar-movies-item">
      <img className="similar-movies-img1" alt={title} src={posterPath} />
      <img className="similar-movies-img2" alt={title} src={backdropPath} />
    </li>
  )
}

export default SimilarMovies
