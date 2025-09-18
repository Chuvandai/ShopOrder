import React from 'react'

const Whychoose = () => {
      const list = [
    {
      img: 'https://intern-project-chi.vercel.app/static/media/bg2.682ad3017ba51acb4d80.jpg',
      Price: '98,000 VND',
      Description: 'Thuộc Golden Gate Group - 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc'
    },
    {
      img: 'https://intern-project-chi.vercel.app/static/media/bg2.682ad3017ba51acb4d80.jpg',
      Price: '198,000 VND',
      Description: 'Thuộc Golden Gate Group - 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc'
    },
    {
      img: 'https://intern-project-chi.vercel.app/static/media/bg3.cd94ec83ef439a755c40.jpg',
      Price: '298,000 VND',
      Description: 'Thuộc Golden Gate Group - 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc'
    },
    {
      img: 'https://intern-project-chi.vercel.app/static/media/bg3.cd94ec83ef439a755c40.jpg',
      Price: '298,000 VND',
      Description: 'Thuộc Golden Gate Group - 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc'
    },
  ];
  return (
    <div>
        <h3 className='flex items-center justify-center font-bold text-4xl p-4 '>Vì sao bạn chọn chúng tôi </h3>
        <div className='flex items-center p-2' >
    {
        list.map((item, index) =>(
            <div key={index} >
                <img src={item.img} className='w-[420px] p-4 hover:opacity-75 transition duration-100  '  alt="" />
                <p className='text-red-400'>Price: {item.Price}</p>
                <p>Mô tả: {item.Description}</p>
            </div>
        ))
    }
        </div>
    </div>
  )
}

export default Whychoose