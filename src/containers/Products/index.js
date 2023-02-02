import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductsPage from './pages/ProductsPage'

function ProductIndex() {
  return (
    <div className="productIndex">
        <Header />
        <ProductsPage />
        <Footer />
      </div>
  )
}

export default ProductIndex