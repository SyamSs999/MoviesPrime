import './index.css'

const PopularItems = props => {
  const {eachMovie} = props
  const {posterPath, title, backdropPath} = eachMovie

  return (
    <li className="popular-item">
      <img className="popular-img1" alt={title} src={posterPath} />
      <img className="popular-img2" alt={title} src={backdropPath} />
    </li>
  )
}

export default PopularItems
