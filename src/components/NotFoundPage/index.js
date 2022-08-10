import './index.css'

const NotFound = () => (
  <div className="not-found-view">
    <h1 className="not-found-heading">Lost Your Way ?</h1>
    <p className="not-found-desc">
      we are sorry, the page you requested could not be found <br /> Please go
      back to the homepage
    </p>
    <button className="go-to-home-btn" type="button">
      Go to Home
    </button>
  </div>
)

export default NotFound
