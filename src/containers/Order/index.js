import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import OrderPage from './pages/OrderPage'

function OrderIndex() {
  return (
    <div>
      <Header />
      <OrderPage />
      <Footer />
    </div>
  )
}

export default OrderIndex