import './index.css'

const PopularItems = props => {
  const {eachMovie} = props
  const {backdropPath} = eachMovie

  return (
    <li className="popular-item">
      <img className="popular-img" alt="title" src={backdropPath} />
    </li>
  )
}

export default PopularItems
