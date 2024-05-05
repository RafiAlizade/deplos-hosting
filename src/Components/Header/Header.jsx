import siteLogo from './../../assets/logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronUp} from 'react-bootstrap-icons'

function Header() {
  const headerLinks = [
    {
      name: 'Home',
      link: '/'
    },

    {
      name: 'Plans',
      link: '/plans'
    },

    {
      name: 'Partnership',
      link: '/partnership'
    },

    {
      name: 'Locations',
      link: '/locations'
    },

    {
      name: 'Creators',
      link: '/creators'
    }
  ]

  return (
    <header className="main_header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <div className="header__logo_box">
              <img src={siteLogo} alt="" />
            </div>
          </div>

          <div className="header__right">
            <nav className="header__links_btn">
                <ul className="header__links">
                {headerLinks.map(({ name, link }, key) => (
  <li key={key}><NavLink to={link}>{name}</NavLink></li>
))}

                  {/* <li><NavLink to='./'>Home</NavLink></li>
                  <li><NavLink to='/plans'>Plans</NavLink></li>
                  <li><NavLink to='/plans'>Partnership</NavLink></li>
                  <li><NavLink to='/plans'>Locations</NavLink></li>
                  <li><NavLink to='/plans'>Creators</NavLink></li> */}

                  <div className="category">
                      <span>Services</span>
                      <ChevronDown />
                  </div>

                  <div className="category">
                      <span>Help</span>
                      <ChevronDown />
                  </div>
                </ul>

                <div className="header_btn">
                  <NavLink to='/register'>Sign up</NavLink>
                </div>
            </nav>


          </div>
        </div>
      </div>
    </header>
  )
}

export default Header