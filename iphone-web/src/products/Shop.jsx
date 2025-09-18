import React, { useEffect, useState } from 'react'

const Shop = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res=>res.json())
            .then(json=>setProducts(json.recipes))
    }, [])
    return (
        <div>
            <h2 className='flex items-center justify-center font-bold text-4xl pt-8 text-orange-600' > DANH SÁCH CÁC MÓN ĂN    </h2>
            <div className='grid grid-cols-4 gap-4 ' >
                {
                    product.map((item, index) => (
                        <div key={index} >
                            <img src={item.image} className='w-[380px] h-[300px] rounded object-cover p-6 shadow-2xs hover:scale-105  transition duration-initial  ' alt="" />
                            <p className='font-bold m-4  '>Món ăn: {item.name}</p>
                            <p className='font-bold m-4  '>Lượt bán: {item.reviewCount}</p>
                            <div className='flex justify-between m-4' >
                                <button className='bg-green-400 w-[130px] h-[50px] text-white font-bold rounded '>Mua ngay</button>
                                <button className='bg-amber-500 w-[130px] h-[50px] text-white font-bold rounded ' > Thêm giỏ hàng </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Shop