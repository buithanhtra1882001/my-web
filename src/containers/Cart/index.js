import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'

function CartIndex() {
  return (
    <div>
        <Routes>
            <Route index element={<CartPage/>} />
        </Routes>

    </div>
  )
}

export default CartIndex