import type { NextPage } from 'next'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <div style={{width: '1200px', display: 'flex', margin: 'auto', flexDirection: 'column'}}>
        <Navbar />
        <Header />
        <About />
      </div>
    </div>
  )
}

export default Home
