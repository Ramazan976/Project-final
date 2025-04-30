import { useState } from "react";


const ShoeSlider = () => {
    const shoes = [
        "https://preview.colorlib.com/theme/karma/img/product/e-p1.png",
        "https://preview.colorlib.com/theme/karma/img/product/e-p1.png",
        "https://preview.colorlib.com/theme/karma/img/product/e-p1.png"
    ];

    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % shoes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + shoes.length) % shoes.length);
    };


    return (
        <div className="text-center">
            <div className="relative">
                <div className="flex justify-between absolute z-10 mt-60 px-4 left-0 right-0">
                    <button onClick={prevSlide} className="px-4 py-2 text-gray-600 rounded-lg bg-gray-200 hover:text-black">Prev</button>
                    <button onClick={nextSlide} className="px-4 py-2 text-gray-600 rounded-lg bg-gray-200 hover:text-black">Next</button>
                </div>
            </div>
            <div className="overflow-hidden relative">

                <div className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)`}}
                >
            {shoes.map((shoe, index) => (
                <div key={index} className="min-w-full pb-10">
                     <img src={shoe}
                     alt="Shoe"
                     className=" mx-auto mb-4 lg:w-1/3 sm:w-[400px] object-contain transition-all duration-500 ease-in-out pt-10"
                     />
                    <div className="flex justify-center items-center gap-5">    
                    <p className="">$150.00</p>
                    <p className="text-gray-500 opacity-60 line-through">$210.00</p>
                    </div>
                    <h2 className="text-2xl font-medium">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h2>
                </div>     
            ))}
           
            </div>
             </div>
        </div>
    )
};

export default ShoeSlider;
