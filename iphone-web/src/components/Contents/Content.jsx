import React from 'react'

const Content = () => {
    return (
        <div className='grid grid-cols-2 gap-4 bg-gray-200'>
            <div className=''>
                <h2 className=' text-4xl font-bold p-6 flex items-center justify-center '>Tiệc tại gia chất nhà hàng </h2>
                <p className='  ml-16 flex items-center justify-center tracking-wider leading-loose ' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint. <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
                </p>
            </div>
            <div className="relative w-full m-8">
                <img
                    src="/images/slides2.jpg"
                    alt=""
                    className="w-[600px] h-[350px]"
                />
                <img
                    src="/images/download.png"
                    alt=""
                    className="absolute top-1/3 left-1/3"
                />
            </div>

        </div>
    )
}

export default Content