import './HomeGetStarted.css'
import { ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function HomeGetStarted() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section className="getstarted">
        <div className="container_section">
          <div className="getstarted__inner"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200">
            <h2 className="getstarted__h2">Are you still waiting?</h2>
            <Link to='/signup' className='getstarted__link'>
                <span className="getstarted__span">Get Started</span>
                <ArrowRight />
            </Link>
          </div>
        </div>
    </section>
  )
}

export default HomeGetStarted