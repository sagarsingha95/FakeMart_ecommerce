import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Categories from '../components/Categories'

const Home = () => {

  return (
    <>
      <Hero/>
      {/* <Categories /> */}
      <Offers/>
      <Testimonials />
      <Newsletter/>
    </>
  )
}

export default Home