import React from 'react';
import './index.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ⬇️ Import MainLayout để dùng cho toàn bộ route
import MainLayout from './layouts/MainLayout';

// ⬇️ Import các page/component chính
import Banner from './components/Banner';
import Content from './components/Contents/Content';
import Contact from './components/Contents/Contact';
import Whychoose from './components/Contents/Whychoose';
import Form from './components/Form';
import Shop from './products/Shop';
// ⬇️ Tạo component page tương ứng
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
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
