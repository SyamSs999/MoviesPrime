import {Link} from 'react-router-dom'

import './index.css'

const PopularItems = props => {
  const {eachMovie} = props
  const {posterPath, title, backdropPath, id} = eachMovie

  return (
    <Link to={`/movies/${id}`}>
      <li className="popular-item">
        <img className="popular-img1" alt={title} src={posterPath} />
        <img className="popular-img2" alt={title} src={backdropPath} />
      </li>
    </Link>
  )
}

export default PopularItems
