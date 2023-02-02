import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeBody from './HomeBody'


function Home() {
  return (
    <div className='Home'>
        <Header />
        <HomeBody />
        <Footer />
    </div>
  )
}

export default Home