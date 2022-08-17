import {Link} from 'react-router-dom'

import './index.css'

const HomeMovieItems = props => {
  const {eachMovie} = props
  const {title, posterPath, id} = eachMovie
  return (
    <Link to={`/movies/${id}`}>
      <li>
        <img className="thumbnail-img" alt={title} src={posterPath} />
      </li>
    </Link>
  )
}
export default HomeMovieItems
