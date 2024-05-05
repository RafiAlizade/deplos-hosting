import './PopularPlans.css'
import { Link } from 'react-router-dom'
import { Check } from 'react-bootstrap-icons'

function PopularPlans() {

  const plansBase = [
    {
      name: 'Basic',
      price: '10',
      access: [
        'Intel Xeon E5-2699 v4',
        '2 Core',
        '2 GB DDR4',
        '30 GB NVMe M.2 SSD'
      ]
    },
    {
      name: 'Mini',
      price: '15',
      access: [
        'Intel Xeon E5-2699 v4',
        '4 Core',
        '6 GB DDR4',
        '50 GB NVMe M.2 SSD',
        'Germany Location'
      ]
    },
    {
      name: 'Premium',
      price: '25',
      access: [
        'Intel Core i9-10920X',
        '16 Core',
        '32 GB DDR4',
        '120 GB NVMe M.2 SSD',
        'Germany Location',
        'DDOS Protection'
      ]
    }
  ]

  return (
    <section className="popular-plans">
        <div className="container_section">
           <div className="plans__inner">
            <div className="plans__top">
                <h2 className="plans__h2">Popular plans</h2>
                <Link to="/plans" className='plans__link'>Plans</Link>
            </div>

            <div className="plans__bottom">
              <div className="plans__container">
                {plansBase.map(({ name, price, access }, key) => (
                  <div className="plans__box" key={key}>
                    <div className="plans__texts">
                    <div className="texts__top">
                      <div className="texts__plan">
                        <div className="plan__name">
                          {name}
                        </div>

                        <div className="plan__price">
                          <span className="price__logo">$</span>
                          <span className="price__number">{price}</span>
                        </div>
                      </div>
                      
                      <ul className="texts__access">
                      {access.map((name , key) => (
                        <li className="access__name" key={key}>
                          <span className="access__logo">
                          <Check />
                          </span>
                          <span className="acces__description">{name}</span></li>
                      ))};
                      </ul>
                    </div>
                  </div>

                  <div className="plans_buttons">
                    <Link to='discord.gg' className='plans_buybutton'>Buy</Link>
                  </div>
                  </div>
                ))}
              </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default PopularPlans