import {Link} from 'react-router-dom'
import './index.css'

const HomeMovieItems = props => {
  const {eachMovie} = props
  const {title, backdropPath, id} = eachMovie
  return (
    <Link to={`/movies/${id}`}>
      <div>
        <img className="thumbnail-img" alt={title} src={backdropPath} />
      </div>
    </Link>
  )
}
export default HomeMovieItems
