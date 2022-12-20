import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import './App.scss'
import ProductIndex from "./containers/Products";
import CartIndex from "./containers/Cart";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ProductIndex /> */}
      <CartIndex />
    </div>
  );
}

export default App;
