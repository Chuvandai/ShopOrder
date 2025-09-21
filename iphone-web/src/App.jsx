import React from 'react';
import './index.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// MainLayout để dùng cho toàn bộ route
import MainLayout from './layouts/MainLayout';
import Banner from './components/Banner';
import Content from './components/Contents/Content';
import Contact from './components/Contents/Contact';
import Whychoose from './components/Contents/Whychoose';
import Form from './components/Form';
import Shop from './products/Shop';
import ProductDetailt from './products/ProductDetailt';
import { CartProvider } from './carts/CartContext';
import CartItem from './carts/CartItem';
import Blog from './components/Contents/Blog';

const Home = () => (
  <>
    <Banner />
    <Content />
    <Contact />
    <Whychoose />
  </>
);

const ContactPage = () => <Form />; 

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
       <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetailt/>}/>
            <Route path="/cart" element={<CartItem/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </CartProvider>
      
    </BrowserRouter>
  );
};

export default App;
