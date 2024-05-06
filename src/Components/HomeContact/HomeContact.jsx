import './HomeContact.css'
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';


function HomeContact() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section className="contact">
        <div className="container_section">
          <div className="contact__inner"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200">
            <div className="contact__left">
                <h5 className="contact__h5">Any questions?</h5>

                <div className="contact__links">
                    <Link to='/discord' className='contact__link'>Discord</Link>
                </div>
            </div>

            <div className="contact__right">
                    <form action="#" className="contact__form">

                        <div className="contact__input">
                        <input type="text" name="contactName" className='contact__name__input' />
                        <label htmlFor="contactName" className='contact__name__label'>Name</label>
                        </div>

                        <div className="contact__input">
                        <input type="email" name="contactEmail" className='contact__email__input' />
                        <label htmlFor="contactEmail" className='contact__email__label'>Email</label>
                        </div>

                        <div className="contact__input">
                        <textarea name="contactText" className='contact__text__input' placeholder='Your question'></textarea>
                        <label htmlFor="contactText" className='contact__text__label'>Your questions</label>
                        </div>

                        <label htmlFor="contactAccept" className="contact__accept">
                            <input type="checkbox" name="contactAccept" />
                            <span className="contact__accept__text">I agree to <Link to='/rules'>terms of use</Link> and <Link to='/privacy'>privacy policy</Link></span>
                        </label>

                        <button className="contact__button">Send</button>
                    </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeContact