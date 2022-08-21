import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <div className="nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <div className="produts-brands">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </div>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </div>

          <Routes>
           
            <Route path={"/react-makeup-shop"} element={<Home />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/products/:id"} element={<ProductDetails />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
