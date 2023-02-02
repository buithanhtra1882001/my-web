import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductDetailPage from './pages/ProductDetailPage'

function ProductDetailIndex() {
  return (
    <div>
     <Header />
     <ProductDetailPage />
     <Footer />
    </div>
  )
}

export default ProductDetailIndex