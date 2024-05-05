import './Reviews.css'
import profilePhoto1 from './../../assets/profilephoto1.png'
import profilePhoto2 from './../../assets/profilephoto2.png'
import profilePhoto3 from './../../assets/profilephoto3.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Reviews() {

    useEffect(() => {
        AOS.init();
      }, [])

  const reviewBase = [
    {
      number: '7.5',
      username: 'Sasha',
      date: '12/21/2023',
      description: 'THE BEST HOSTING. When aurorix is broken, here is 20 tps and 60 pings on 1.19.4 on a free node, and there the only option is to donate, but on aurorix even on 16.5 there is 16 tps and 200+ ping',
      image: profilePhoto1,
    },
    {
        number: '7.5',
        username: 'flamecatoff',
        date: '12/28/2023',
        description: 'Fast host, used it as a proxy server, there were no disconnects + spent time in the role of a server and gave the players admin permissions, do what you want, I will continue to use it. I hope the hosting will live for a long time, I have seen many hosts that started out very well, but after years they quietly closed themselves off from everyone.',
        image: profilePhoto2,
      },
      {
        number: '9.5',
        username: 'flatxuser',
        date: '12/17/2023',
        description: `The host does not lag and has very powerful hardware, as for a free hosting it pulls even perfomant mods and it isn't even half loaded, there is no ping above 20, at least on the UK node`,
        image: profilePhoto3,
      }
  ]

  return (
    <section className="review">
        <div className="container_section">
           <div className="review__inner"
           data-aos="fade-left"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine"
           data-aos-duration="1200">
                <div className="review__top">
                        <h2 className="review__h2">Reviews</h2>
                </div>

                <div className="review__bottom">
                    <div className="review__container">
                        {reviewBase.map(({ number, username, date, description, image }, key) => (
                            <div className="review__box"  key={key}>
                                    <div className="review__number">
                                        <span>{number}/10</span>
                                    </div>

                                    <div className="review__member">
                                        <div className="member__left">
                                            <img src={image} alt={username} className='member__photo' />
                                            <span className="member__name">{username}</span>
                                        </div>

                                        <div className="member__right">
                                            <span className="member__date">{date}</span>
                                        </div>
                                    </div>

                                    <span className="review__description">
                                        {description}
                                    </span>
                            </div>
                        ))}
                    </div>

                    <Link to='/discord' className='review__href'>All reviews</Link>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Reviews