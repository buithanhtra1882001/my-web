import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage'

function ProductDetailIndex() {
  return (
    <div>
      <Routes>
              <Route index element={<ProductDetailPage/>} />
          </Routes>
    </div>
  )
}

export default ProductDetailIndex