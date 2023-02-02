import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProfilePage from './pages/ProfilePage'

function Profile() {
  return (
    <div>
      <Header />
      <ProfilePage />
      <Footer />
    </div>
  )
}

export default Profile