import Cookies from 'js-cookie'

import NavBar from '../NavBar'
import Footer from '../Footer'

import './index.css'

const isAccount = true

const Account = props => {
  const username = Cookies.get('username')
  const maskedPassword = Cookies.get('maskedPassword')

  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <NavBar isAccount={isAccount} />
      <div className="account-page">
        <h1 className="account-heading">Account</h1>
        <hr className="separator" />
        <div className="member-ship-details">
          <p className="member-ship-text">Member ship</p>
          <div className="userDetails">
            <p className="username">{username}@gmail.com</p>
            <p className="password">Password: {maskedPassword}</p>
          </div>
        </div>
        <hr className="separator" />
        <div className="plan-details">
          <p className="plan-details-text">Plan details</p>
          <p className="plan-name">Premium</p>
          <p className="plan-feature">Ultra HD</p>
        </div>
        <hr className="separator" />
        <button onClick={onLogout} type="button" className="log-out-btn">
          Log out
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Account
