import {Component} from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class NavBar extends Component {
  state = {fullMenu: false}

  menuShow = () => {
    this.setState({fullMenu: true})
  }

  menuHide = () => {
    this.setState({fullMenu: false})
  }

  render() {
    const {fullMenu} = this.state

    return (
      <nav className="nav-bar">
        <div className="header">
          <img
            className="header-web-site"
            alt="website logo"
            src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660023880/web_site_logo_vwuuip.png"
          />
          <ul className="show-menu show1">
            <li className="menu-items">Home</li>
            <li className="menu-items">Popular</li>
          </ul>
          <div className="icons-container">
            <button type="button" className=" search-button">
              <HiOutlineSearch className="icons" />
            </button>
            <img
              className="avatar show1"
              alt="profile"
              src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660041993/AvatarMale_loulo9.png"
            />
            <button
              onClick={this.menuShow}
              type="button"
              className="show close-btn"
            >
              <MdMenuOpen className="hamburger icons" />
            </button>
          </div>
        </div>

        {fullMenu && (
          <ul className="show-menu">
            <li className="menu-items">Home</li>
            <li className="menu-items">Popular</li>
            <li className="menu-items">Account</li>
            <li>
              <button
                onClick={this.menuHide}
                className="close-btn"
                type="button"
              >
                <AiFillCloseCircle className="close icons" />
              </button>
            </li>
          </ul>
        )}
      </nav>
    )
  }
}

export default NavBar
