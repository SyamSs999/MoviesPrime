import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-page">
    <div className="contact-icon-container">
      <FaGoogle className="contact-icon" />
      <FaTwitter className="contact-icon" />
      <FaInstagram className="contact-icon" />
      <FaYoutube className="contact-icon" />
    </div>
    <p className="contact-text">Contact us</p>
  </div>
)

export default Footer
