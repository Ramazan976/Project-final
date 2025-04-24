import React from "react";

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

      
    <div className=" relative flex flex-row md:flex-row flex-wrap justify-center p-4 pt-96 ">  
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p1.jpg" alt="" className=" w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-row gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p2.jpg" alt="" className="w-80 object-contain" />
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-row gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p3.jpg" alt="" className="w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-row gap-3"> 
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p4.jpg" alt="" className="w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-wrap gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p5.jpg" alt="" className="w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-wrap gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p6.jpg" alt="" className="w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-wrap gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p7.jpg" alt="" className="w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-wrap gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
      <div className="p-4 items-center flex flex-col">
          <img src="https://preview.colorlib.com/theme/karma/img/product/p8.jpg" alt="" className="w-80 object-contain"/>
          <div className="w-80 mt-2">
          <h2 className="w-full text-sm font-semibold leading-5 line-clamp-2">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
          <div className="flex flex-wrap gap-3">
          <p>$150.00</p>
          <p className="text-gray-400 line-through">$210.00</p>
          </div>
          </div>
      </div>
    </div>
  </>
    
  );
}

export default Home;
