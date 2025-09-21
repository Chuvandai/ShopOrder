import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Header
        title="Văn Đại Shop"
        menu={['Trang chủ', 'Cửa hàng', 'Thực đơn', 'Tin tức']}
        button="Liên hệ đặt tiệc"
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default MainLayout;
