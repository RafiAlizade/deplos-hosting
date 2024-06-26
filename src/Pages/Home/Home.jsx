import Header from './../../Components/Header/Header'
import HomeHero from './../../Components/HomeHero/HomeHero'
import WhoUs from './../../Components/WhoUs/WhoUs'
import SupportedService from './../../Components/SupportedService/SupportedService'
import PopularPlans from './../../Components/PopularPlans/PopularPlans'
import Preview from './../../Components/Preview/Preview'
import Reviews from './../../Components/Reviews/Reviews'
import AskedQuestions from './../../Components/AskedQuestions/AskedQuestions'
import HomeContact from './../../Components/HomeContact/HomeContact'
import HomeGetStarted from './../../Components/HomeGetStarted/HomeGetStarted'

function Home() {
  return (
    <>
    <Header />

<main className="hosting_main">
  <HomeHero />
  <WhoUs />
  <SupportedService />
  <PopularPlans />
  <Preview />
  <Reviews />
  <AskedQuestions />
  <HomeContact />
  <HomeGetStarted />
</main>
</>
  )
}

export default Home