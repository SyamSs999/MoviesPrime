import {Link} from 'react-router-dom'

import './index.css'

const NotFoundPage = () => (
  <div className="not-found-view">
    <h1 className="not-found-heading">Lost Your Way ?</h1>
    <p className="not-found-desc">
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button className="go-to-home-btn" type="button">
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFoundPage
