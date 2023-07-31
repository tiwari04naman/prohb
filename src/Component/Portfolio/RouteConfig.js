import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Carosel from './Carosel';
import Footer from './Footer';
import Card from './Card';
import FirstComponent from '../FirstComponent';
import Galery1 from '../Galery1';
import Property from '../Property';
import Display from '../Component2/Display';
import Display1 from '../Component2/Display1';
import InlineCSS from '../Component2/InlineCSS';
import ExternalCSS from '../Component2/ExternalCSS';
import Product from '../Component2/Product';
import CounterComp from '../Component27/CounterComp';
import LikeComp from '../Component27/LikeComp';
import Viewtodo from '../ToDoList/Viewtodo';
import LocalStorage from '../LocalStorage';







export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="carosel" element={<Carosel />} />
          <Route path="footer" element={<Footer/>} />
          <Route path="card" element={<Card/>} />
          <Route path="/firstcomponent" element={<FirstComponent/>} />
          <Route path="/galery1" element={<Galery1/>} />
          <Route path="/property" element={<Property url="image/satish-nagapuri-6PP8DrhY0aA-unsplash.jpg"/>} />
          <Route path="/display" element={<Display/>} />
          <Route path="/display1" element={<Display1/>} />
          <Route path="/inlinecss" element={<InlineCSS/>} />
          <Route path="/externalcss" element={<ExternalCSS/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/counter" element={<CounterComp/>} />
          <Route path="/like" element={<LikeComp count={10}/>} />
          <Route path="/todo" element={<Viewtodo/>} />
          <Route path="/localstorage" element={<LocalStorage/>} />
         
          

        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}