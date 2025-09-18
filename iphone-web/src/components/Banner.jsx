import React from "react";
import { Carousel } from "antd";

// const contentStyle = {
//   width: "100%",
//   height: "500px",
//   objectFit: "cover",
// };

const Banner = () => {
  return (
    <div>
      <Carousel autoplay effect="fade" dots>
        <div className="relative  h-[500px]">
          <img
            src="/images/slides1.jpg"
            className="w-full h-full object-cover opacity-90"
            alt=""
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center px-4">
            ƯU ĐÃI LÊN T 30% <br /> KHI  ĐẶT MENU SUM VẦY 
          </h2>
        </div>
        <div className="relative  h-[500px]">
          <img
            src="/images/slides1.jpg"
            className="w-full h-full object-cover opacity-90"
            alt=""
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center px-4">
            ƯU ĐÃI LÊN T 30% <br /> KHI  ĐẶT MENU SUM VẦY 
          </h2>
        </div>
        <div className="relative h-[500px]">
          <img
            src="/images/slides1.jpg"
            className="w-full h-full object-cover opacity-90"
            alt=""
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center px-4">
            ƯU ĐÃI LÊN T 30% <br /> KHI  ĐẶT MENU SUM VẦY 
          </h2>
        </div>
       
      </Carousel>
    </div>
  );
};

export default Banner;
