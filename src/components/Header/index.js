import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-con">
    <div className="logo-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        width="30px"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
