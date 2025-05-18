import React from "react";
import ProductSlider from "../components/ProductSlider";
import CountdownTimer from "../components/Countdowntimer";
import ShoeSlider from "../components/shoeslider";
import DealsofTheWeek from "../components/DealsofTheWeek";
const slides = [
  {
    image: "https://preview.colorlib.com/theme/karma/img/banner/banner-img.png",
    title: "Nike Now Collection!",
    description: "Step into the future of comfort and performance.",
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/banner/banner-img.png",
    title: "Speed Meets Style",
    description: "Redefining style with every step.",
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/banner/banner-img.png",
    title: "Power Your Moves",
    description: "Built for speed. Designed for you.",
  },
];


function Home() {
  return (
    <>
      <section className="relative h-[670px] pt-[70px] overflow-hidden mt-[-70px]">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('	https://preview.colorlib.com/theme/karma/img/banner/banner-bg.jpg')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 h-full">

          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-full lg:w-[90%] xl:w-[80%] h-[600px] bg-transparent rounded-2xl  flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-10"
              >

                <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mb-90">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-gray-600 text-lg md:text-xl">{slide.description}</p>

                </div>
                <div className="relative z-10 min-h-px pr-[15px] pl-[15px] columns-lg banner-img w-full lg:w-1/2 flex justify-center mt-6 md:mt-0 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[120%] h-[80%] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-13 px-4 md:px-32 lg:px-20 border-0">
        <div className="grid grid-cols-1  sm:grid-cols-2 pt-5 pb-12 shadow-xl rounded-lg px-8 lg:grid-cols-4 gap-6 text-center">

          <div className="flex flex-col items-center">
            <i className="fas fa-truck text-3xl "></i>
            <h3 className="text-lg font-semibold mb-1">Free Delivery</h3>
            <p className="text-sm text-gray-500">Free Shipping on all orders</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-undo-alt text-3xl "></i>
            <h3 className="text-lg font-semibold mb-1">Return Policy</h3>
            <p className="text-sm text-gray-500">Easy return within 30 days</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-headset text-3xl "></i>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-500">Quick response anytime</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-lock text-3xl "></i>
            <h3 className="text-lg font-semibold mb-1">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% secure payment</p>
          </div>

        </div>
      </div>


      <section className=" h-[600px] bg-white py-16 flex items-center justify-center">

        <div className="grid px-34 absolute grid-cols-3 gap-6 p-8 h-[600px] items-center">
          <div className="relative col-span-2">
            <img src="https://preview.colorlib.com/theme/karma/img/category/c1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>

          <div className="relative">
            <img src="https://preview.colorlib.com/theme/karma/img/category/c2.jpg"
              alt=""
              className="w-[215px] object-cover rounded-lg shadow-md" />
          </div>

          <div className="relative col-span-1">
            <img src="https://preview.colorlib.com/theme/karma/img/category/c3.jpg"
              alt=""
              className="w-[215px] object-cover rounded-lg shadow-md" />
          </div>

          <div className="relative col-span-2">
            <img src="https://preview.colorlib.com/theme/karma/img/category/c4.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>

          <div className="relative col-span-3 items-center justify-center flex">
            <img src="https://preview.colorlib.com/theme/karma/img/category/c5.jpg"
              alt=""
              className="w-[350px] object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <ProductSlider />
            <div className=" flex-col lg:flex-row justify-center items-center flex">
        <div className="relative inline-block w-full max-w-[100%] max-h-[100%]">
          <img src="https://preview.colorlib.com/theme/karma/img/exclusive.jpg" alt="shoes-black" className="w-full h-full object-cover"/>
          <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col bg-black/50">
          <h2 className="text-white font-semibold text-3xl mb-3">Exclusive Hot Deal Ends Soon!</h2>
          <p className="text-white mb-7">Who are in extremely love with eco friendly system.</p>
          <CountdownTimer targetDate= "2025-05-30T00:00:00"/>
          </div>
        </div>
        <div className="lg:w-[700px] lg:h-[700px] w-full flex justify-center items-center ">
      <ShoeSlider />
        </div>
        </div>
              
          <section>
          <div className=" w-full mb-20 flex flex-wrap justify-center items-center">
            <a href="#" className="max-w-xs h-auto mx-4">
              <img src="	https://preview.colorlib.com/theme/karma/img/brand/1.png" alt=""  className="opacity-20 hover:opacity-70"/>
            </a>
            <a href="#" className="max-w-xs h-auto  mx-4">
              <img src="https://preview.colorlib.com/theme/karma/img/brand/2.png" alt=""  className="opacity-20 hover:opacity-70"/>
            </a>
            <a href="#" className="max-w-xs h-auto  mx-4">
              <img src="	https://preview.colorlib.com/theme/karma/img/brand/3.png" alt=""  className="opacity-20 hover:opacity-70"/>
            </a>
            <a href="#" className="max-w-xs h-auto  mx-4">
              <img src="	https://preview.colorlib.com/theme/karma/img/brand/4.png" alt=""  className="opacity-20 hover:opacity-70"/>
            </a>
            <a href="#" className="max-w-xs h-auto mx-4">
              <img src="	https://preview.colorlib.com/theme/karma/img/brand/5.png" alt=""  className="opacity-20 hover:opacity-70"/>
            </a>
          </div>
        <DealsofTheWeek />
          </section>
    </>
    
  );
}

export default Home;
