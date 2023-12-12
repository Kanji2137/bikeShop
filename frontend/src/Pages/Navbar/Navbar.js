import React, {useState, useEffect} from "react";
import _debounce from 'lodash.debounce'

import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import {FaCartArrowDown} from "react-icons/fa";

import Footer from "../Footer/Footer";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ShopPage from "../ShopPage/ShopPage";
import ProductPage from "../ProductPage/ProductPage";
import CartPage from "../CartPage/CartPage";
import CartProvider from "../../CartProvider";
import PaymentPage from "../CartPage/PaymentPage/PaymentPage";
import ServicePage from "../ServicePage/ServicePage";

import Contact from "../Contact/Contact";

import logo from "../../images/logo.svg";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    if (isChecked) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    setIsChecked(!isChecked);
  };

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  if (width > 1000 && isChecked) {
    document.body.classList.remove("overflow-hidden");
    setIsChecked(!isChecked);
  }

  return (
      <Router>
        <div>
          <div className="nav">
            <input
                type="checkbox"
                id="nav-check"
                checked={isChecked}
                onChange={checkHandler}
            />
            <div className="nav-header">
              <div className="nav-title">
                <Link to="/">
                  <img src={logo} alt="Logo"/>
                  <h1>The Bike Hub</h1>
                </Link>
              </div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="nav-links" onClick={checkHandler}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Contact/>
              <Link to="/service">Service</Link>
              <Link to="/cart/shop">Shop</Link>
              <Link to="/cart/cart">
                <FaCartArrowDown/>
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/cart" element={<CartProvider/>}>
              <Route path="/cart/shop" element={<ShopPage/>}/>
              <Route path="/cart/pruduct" element={<ProductPage/>}/>
              <Route path="/cart/cart" element={<CartPage/>}/>
              <Route path="/cart/payment" element={<PaymentPage/>}/>
            </Route>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/service" element={<ServicePage/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default Navbar;