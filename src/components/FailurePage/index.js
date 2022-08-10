import './index.css'

const FailurePage = () => (
  <div className="failure-view">
    <img
      className="failure-img"
      alt="failure view"
      src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660138148/Background-Complete_jjknxi.png"
    />
    <p className="failure-text">Something went wrong, Please try again.</p>
    <button className="retry-btn" type="button">
      Try Again
    </button>
  </div>
)

export default FailurePage
