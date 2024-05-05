import './HomeHero.css'
import heroImage from './../../assets/image2.svg'
import { Link } from 'react-router-dom'
import { ArrowRight} from 'react-bootstrap-icons'

function HomeHero() {

  return (
    <section className="hero">
        <div className="container">
            <div className="hero__inner">
                <div className="hero__top">
                    <h2 className="hero__h2 animation">
                    Reliable game server hosting
                    </h2>

                    <span className="hero__description animation">
                    With great network speed and easy control panel
                    </span>

                    <Link to='/signup' className='signup__btn animation'>
                        <span className="signup__text">
                        Get Started Now
                        </span>

                        <ArrowRight />
                    </Link>
                </div>

                <div className="hero_bottom animation">
                    <div className="bottom_image">
                        <img src={heroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHero