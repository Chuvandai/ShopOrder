import React, { useState } from 'react'

const Form = () => {
  // validate form state basic
    const [errosform, seterrosForm] = useState({
    name: '',
    sdt: '',
    diachi: '',
    diachisk: '',
    date: '',
    sl: '',
   
  });

  const [form, setForm] = useState({
    name: '',
    sdt: '',
    diachi: '',
    diachisk: '',
    date: '',
    sl: ''
  });
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }
  function handleSubmit(e) {
    e.preventDefault();
    let  isVal= true;
    let erros={};
    console.log('dữ liệu của form', form);
    
    if(!form.name){
      erros.name='Vui longf nhập họ tên'
      isVal=false;
    }
    if(!form.sdt){
      erros.sdt='Vui longf nhập số điện thoại'
      isVal=false;
    }
    if(!form.diachi){
      erros.diachi='Vui longf nhập địa chỉ'
      isVal=false;
    }
    if(!form.diachisk){
      erros.diachisk='Vui longf nhập địa chỉ sự kiện'
      isVal=false;
    }
    if(!form.date){
      erros.date='Vui longf chọn ngày'
      isVal=false;
    }
    if(!form.sl){
      erros.sl='Vui longf nhập số lượng'
      isVal=false;
    }
    seterrosForm(erros)
    if(isVal){
       setForm({
      name: '',
      sdt: '',
      diachi: '',
      diachisk: '',
      date: '',
      sl: ''
    }
    )
     seterrosForm({})
      }
  }

  return (
    <div>
      <h2 className='flex items-center justify-center text-3xl font-bold pt-12' > LIÊN  HỆ ĐẶT TIỆC </h2>
      <p className='flex items-center justify-center' >Quý khách vui lòng để lại thông tin để được đặt bàn sớm nhất !!!!</p>
      <div className='flex items-center justify-center p-4' >
        <form onSubmit={handleSubmit} action="" className='grid grid-cols-2 gap-12 m-4  '  >
         <div className="flex flex-col" > 
           <input type="text" name='name' value={form.name} onChange={handleForm} placeholder=' Nhập Họ Và Tên' className='border-0 border-b-2 border-gray-500 outline-none w-[450px] p-2' />
          <span className='text-red-500 text-sm' >{errosform.name}</span>
         </div>
         <div className="flex flex-col">
           <input type="text" name='sdt' placeholder=' Nhập số điện thoại' value={form.sdt} onChange={handleForm} className='border-0 border-b-2 border-gray-500 outline-none w-[450px] p-2' />
            <span className='text-red-500 text-sm' >{errosform.sdt}</span>
         </div>
        <div className="flex flex-col">
            <input type="text" name='diachi' placeholder=' Nhập địa chỉ ' value={form.diachi} onChange={handleForm} className='border-0 border-b-2 border-gray-500 outline-none w-[450px] p-2' />
              <span className='text-red-500 text-sm' >{errosform.diachi}</span>
        </div>
        <div className="flex flex-col">
            <input type="text" name='diachisk' placeholder=' Địa chỉ tổ chức sự kiện' value={form.diachisk} onChange={handleForm} className='border-0 border-b-2 border-gray-500 outline-none w-[450px] p-2' />
            <span className='text-red-500 text-sm' >{errosform.diachisk}</span>
        </div>
        <div className="flex flex-col">
            <input type="date" name='date' placeholder=' Nhập ngày ' value={form.date} onChange={handleForm} className='border-0 border-b-2 border-gray-500 outline-none w-[450px] p-2' />
              <span className='text-red-500 text-sm' >{errosform.date}</span>
        </div>
        <div className="flex flex-col">
            <input type="number" name='sl' placeholder=' Chọn số lượng khách' value={form.sl} onChange={handleForm} className='border-0 border-b-2 border-gray-500 outline-none w-[450px] p-2' />
                <span className='text-red-500 text-sm' >{errosform.sl}</span>
        </div>
          <button type='submit' className='bg-amber-500 flex items-center col-span-2 mx-auto justify-center w-[150px] h-[40px] rounded ' >Đặt tiệc ngay</button>

        </form>
      </div>
    </div>
  )
}

export default Form