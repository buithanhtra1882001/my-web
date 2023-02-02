import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import './App.scss'
import ProductIndex from "./containers/Products";
import CartIndex from "./containers/Cart";
import { Route, Routes } from "react-router-dom";
import ProductDetailIndex from "./containers/ProductDetail";
import OrderIndex from "./containers/Order";
import Profile from "./containers/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Home />} />
         
        <Route path="profile/*" element={<Profile />}/>
        <Route path="order" element={<OrderIndex />} />
        <Route path="cart" element={<CartIndex/>} />
        <Route path="detail/:productId" element={<ProductDetailIndex />} />
        <Route path="product/*" element={<ProductIndex />} />
       
      </Routes>
    </div>
  );
}

export default App;
