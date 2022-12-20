import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'

function ProductIndex() {
  return (
    <div>
          <Routes>
              <Route index element={<ProductsPage/>} />
          </Routes>
      </div>
  )
}

export default ProductIndex