import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Contact from './screens/Contact';
import SingleProduct from './screens/SingleProduct';
import Cart from './screens/Cart';
import ErrorPage from "./screens/ErrorPage";
import Footer from "./components/Footer";

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/singleproduct/:id' element={<SingleProduct />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/errorpage' element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
