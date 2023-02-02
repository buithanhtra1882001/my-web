import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CartPage from './pages/CartPage'

function CartIndex() {
  return (
    <div>
      <Header />
      <CartPage />
      <Footer />
    </div>
  )
}

export default CartIndex