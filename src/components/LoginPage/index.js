import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <img
          className="login-website-logo"
          alt="login website logo"
          src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660023880/web_site_logo_vwuuip.png"
        />
        <div className="login-form-container">
          <h1 className="login-heading">Login</h1>
          <form className="login-form">
            <label className="login-label" htmlFor="usernameInput">
              USERNAME
            </label>
            <input
              placeholder="Username"
              className="login-input1"
              type="text"
              id="usernameInput"
            />
            <label className="login-label" htmlFor="passwordInput">
              PASSWORD
            </label>
            <input
              placeholder="Password"
              className="login-input2"
              type="password"
              id="passwordInput"
            />
            {false && (
              <p className="err-msg">Username or Password is invalid</p>
            )}
            <button className="sign-in-btn" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
