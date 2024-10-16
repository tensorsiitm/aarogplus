import Navbar from '../Navbar/navbar'
import Contact from './contact'
import Current from './current'
// import Domain from './domain'
import Faqs from './faqs'
import Footer from './footer'
import './home.scss'
import Landing from './landing'
import Objectives from './objectives'
import Trending from './trending'

function Home() {

  return (
    <div className='home'>
      <Navbar />
      <Landing />
      <div className='vision' id='vision'>
        <h1>Vision</h1>
        <p>To be a catalyst for innovation by empowering startups and emerging technologies to realize their full potential. We envision a future where groundbreaking ideas are nurtured into sustainable ventures that positively impact industries and improve lives globally.</p>
      </div>
      <Trending />
      {/* <Domain /> */}
      <Objectives />
      <Current />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
