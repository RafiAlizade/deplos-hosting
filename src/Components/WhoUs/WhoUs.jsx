import './WhoUs.css'

function Whous() {

    const dataInfo = [
        {
            id: 1,
            name: 'Conveniently',
            description: 'Our professional control panels, allows you to use our service at any time and for any device'
        },
        {
            id: 2,
            name: 'Stable',
            description: 'Our equipment has uninterrupted support, low ping and no lag. And the speed of operation will allow you to set up a server in 25 seconds.'
        },
        {
            id: 3,
            name: 'Safely',
            description: 'We have a security certificate installed, all data is transmitted in encrypted form.'
        }
    ]

  return (
    <section className="aboutus">
        <div className="container_section">
                <div className="aboutus__inner">
                    <div className="aboutus__top">
                        <h2 className="aboutus_h2">Why us?</h2>
                    </div>

                    <div className="aboutus__bottom">
                        <div className="aboutus__container">
                            {dataInfo.map(( { id , name , description}, key) => (
                                <div className="aboutus__box" id={id} key={key}>
                                    <span className="aboutus__name">{name}</span>
                                    <span className="aboutus__description">{description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Whous