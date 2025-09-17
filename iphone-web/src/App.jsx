import React from 'react'
import Header from './components/Header'
import './index.css'
const App = () => {
  return (
    <div>
        <Header title="Văn Đại Shop" menu={['Trang chủ', 'Về chúng tôi', 'Thực đơn ', 'Tin tức ']} button="Đăng nhập" />
      
    </div>
  )
}

export default App