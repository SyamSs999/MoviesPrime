import './index.css'

const FailurePage = props => {
  const {tryAgain} = props

  const onTryAgain = () => {
    tryAgain()
  }

  return (
    <div className="failure-view">
      <img
        className="failure-img"
        alt="failure view"
        src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660153718/movies%20prime%20app/failure_img_vggqi4.svg"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button onClick={onTryAgain} className="retry-btn" type="button">
        Try Again
      </button>
    </div>
  )
}

export default FailurePage
