import React from 'react'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'

function Home() {
  return (
    <div className='Home'>
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
    </div>
  )
}

export default Home