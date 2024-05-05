import './Preview.css'
import controlImage from './../../assets/panel.png'
import partnershipImage from './../../assets/partners.png'
import communityImage from './../../assets/community.png'
import { Link } from 'react-router-dom'

function Preview() {

  const previewBase = [
    {
      title: 'Convenient control panel',
      description: 'A quick and easy panel will allow you to use our hosting without problems. With it, you will greatly facilitate the creation of your server.',
      linkText: 'Go to panel',
      linkHref: '/panel',
      image: controlImage,
    },
    {
        title: 'Partnership system',
        description: 'If you have an audience in some social network that is interested in hosting servers, then you can safely apply for a partnership with us. And get big prizes for it.',
        linkText: 'Partnership program',
        linkHref: '/partners',
        image: partnershipImage
      },
      {
        title: 'Own community',
        description: 'In our discord server you will find raffles and gifts. As well as news and frequent updates',
        linkText: 'Discord',
        linkHref: '/discord',
        image: communityImage
      }
  ]

  return (
    <section className="preview">
        <div className="container_section">
           <div className="preview__inner">
                    <div className="preview__container">
                        {previewBase.map(({ title, description, linkText, linkHref, image }, key) => (
                            <div className="preview__box" key={key}>
                                    <div className="preview__left">
                                        <h5 className="preview__h5">{title}</h5>
                                        <span className="preview__description">{description}</span>
                                        <Link to={linkHref} className='preview__href'>{linkText}</Link>
                                    </div>

                                    <div className="preview__right">
                                        <div className="preview__imagebox">
                                            <img src={image} alt={title} />
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
           </div>
        </div>
    </section>
  )
}

export default Preview