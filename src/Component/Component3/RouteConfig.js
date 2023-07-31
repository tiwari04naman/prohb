import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from '../Component2.js/Product';
import About from "./About";
import NavLayout from "./NavLayout";
import Home from "./Home";


export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
