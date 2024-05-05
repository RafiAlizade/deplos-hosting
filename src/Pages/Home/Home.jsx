import Header from './../../Components/Header/Header'
import HomeHero from './../../Components/HomeHero/HomeHero'
import WhoUs from './../../Components/WhoUs/WhoUs'
import SupportedService from './../../Components/SupportedService/SupportedService'
import PopularPlans from './../../Components/PopularPlans/PopularPlans'

function Home() {
  return (
    <>
    <Header />

<main className="hosting_main">
  <HomeHero />
  <WhoUs />
  <SupportedService />
  <PopularPlans />
</main>
</>
  )
}

export default Home