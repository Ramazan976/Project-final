import React, { useEffect, useState } from "react";

const ProductSlider = ({searchTerm}) => {
  const latestProducts = [
     {
    image: "https://preview.colorlib.com/theme/karma/img/product/p1.jpg",
    name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p2.jpg",
    name: "ADIDAS HAMMER GRIP – ULTIMATE PERFORMANCE FOOTWEAR",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p3.jpg",
    name: "ADIDAS PRO ATHLETE EDITION WITH HAMMER SOLE",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p4.jpg",
    name: "ADIDAS PERFORMANCE BOOST WITH ALL-NEW HAMMER SOLE",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p5.jpg",
    name: "ADIDAS POWERSTEP – HAMMER SOLE FOR ACTIVE LIFESTYLES",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p6.jpg",
    name: "ADIDAS SPORTS PRO WITH NEW HAMMER SOLE TECHNOLOGY",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p7.jpg",
    name: "ADIDAS HAMMER SOLE – BUILT FOR ATHLETES",
    price: "$150.00",
    oldPrice: "$210.00"
  },
  {
    image: "https://preview.colorlib.com/theme/karma/img/product/p8.jpg",
    name: "ADIDAS HAMMER SOLE SNEAKERS – ENGINEERED FOR SPEED AND SUPPORT",
    price: "$150.00",
    oldPrice: "$210.00"
  }
  ];

  const comingProducts = [
    {
    image: "https://preview.colorlib.com/theme/karma/img/product/p8.jpg",
    name: "ADIDAS HAMMER SOLE SNEAKERS – ENGINEERED FOR SPEED AND SUPPORT",
    price: "$150.00",
    oldPrice: "$210.00"
    },
    {
    image: "https://preview.colorlib.com/theme/karma/img/product/p7.jpg",
    name: "ADIDAS HAMMER SOLE – BUILT FOR ATHLETES",
    price: "$150.00",
    oldPrice: "$210.00"
    },
    {
    image: "https://preview.colorlib.com/theme/karma/img/product/p6.jpg",
    name: "ADIDAS SPORTS PRO WITH NEW HAMMER SOLE TECHNOLOGY",
    price: "$150.00",
    oldPrice: "$210.00"
    },
    {
    image: "https://preview.colorlib.com/theme/karma/img/product/p5.jpg",
    name: "ADIDAS POWERSTEP – HAMMER SOLE FOR ACTIVE LIFESTYLES",
    price: "$150.00",
    oldPrice: "$210.00"
    },
     {
    image: "https://preview.colorlib.com/theme/karma/img/product/p4.jpg",
    name: "ADIDAS PERFORMANCE BOOST WITH ALL-NEW HAMMER SOLE",
    price: "$150.00",
    oldPrice: "$210.00"
    },
      {
    image: "https://preview.colorlib.com/theme/karma/img/product/p3.jpg",
    name: "ADIDAS PRO ATHLETE EDITION WITH HAMMER SOLE",
    price: "$150.00",
    oldPrice: "$210.00"
    },
     {
    image: "https://preview.colorlib.com/theme/karma/img/product/p2.jpg",
    name: "ADIDAS HAMMER GRIP – ULTIMATE PERFORMANCE FOOTWEAR",
    price: "$150.00",
    oldPrice: "$210.00"
    },
    {
    image: "https://preview.colorlib.com/theme/karma/img/product/p1.jpg",
    name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
    price: "$150.00",
    oldPrice: "$210.00"
    }
  ];

  const allProducts = [...latestProducts, ...comingProducts];

  const filteredProducts = allProducts.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const getHeading = () => {
    return currentPage === 0 ? "Latest Products" : "Coming Soon";
  };
  
  const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  existingCart.push(product);
  localStorage.setItem('cart', JSON.stringify(existingCart));
};

  return (
    <div className="relative p-10 pt-96  w-full max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-4 px-4">
        <button
          onClick={prevSlide}
          className="text-gray-500 px-3 py-1 rounded-lg bg-gray-100 hover:text-black"
        >
          Prev
        </button>
        <h1 className="text-4xl font-bold">{getHeading()}</h1>
        <button
          onClick={nextSlide}
          className="text-gray-500 px-3 py-1 rounded-lg bg-gray-100 hover:text-black"
        >
          Next
        </button>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{
            transform: `translateX(-${currentPage * 50}%)`,
            width: `${filteredProducts.length * 100}%`,
          }}
        > 
          {filteredProducts.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-4 w-300 p-4"
            >
              {group.map((product, index) => (
                <div
                  key={index}
                  className="p-4 items-center flex flex-col w-full bg-white "
                >
                  <img
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    className="w-full object-contain"
                  />
                  <div className="w-full mt-2">
                    <h2 className="text-sm font-semibold leading-5 line-clamp-2">
                      {product.name}
                    </h2>
                    <div className="flex gap-3">
                      <p>{product.price}</p>
                      <p className="text-gray-400 line-through">{product.oldPrice}</p>
                    </div>


                    <div className="flex flex-row gap-2  items-center relative">
                    <div className="flex gap-4 relative">
                    <div className="relative group flex-shrink-0 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => addToCart(product)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="size-7 inset-0 bg-[#838bb1] relative p-1 rounded-2xl text-white hover:text-amber-600 transition-colors duration-200 hover:bg-orange-500 z-10 group-hover:mr-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.9931.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243 l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0.375.375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      <span className="absolute z-0 left-7 top-1/2 -translate-y-1/2 translate-x-[-1rem] opacity-0 text-black whitespace-nowrap transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                        ADD TO BAG
                      </span>
                    </div>
                    <div className="relative group flex-shrink-0 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 inset-0 bg-[#838bb1] relative p-1 rounded-2xl text-white hover:text-amber-600 transition-colors duration-200 hover:bg-orange-500 z-10 group-hover:mr-24">
                      <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                      </svg>
                      <span className="absolute z-0 left-7 top-1/2 -translate-y-1/2 translate-x-[-1rem] opacity-0 text-black whitespace-nowrap transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                        WISHLIST
                      </span>
                    </div>
                    <div className="relative group flex-shrink-0 transition-all duration-300">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 inset-0 bg-[#838bb1] relative p-1 rounded-2xl text-white hover:text-amber-600 transition-colors duration-200 hover:bg-orange-500 z-10 group-hover:mr-24">
                      <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd" />
                      </svg>
                      <span className="absolute z-0 left-7 top-1/2 -translate-y-1/2 translate-x-[-1rem] opacity-0 text-black whitespace-nowrap transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                        COMPARE
                      </span>
                    </div>
                    <div className="relative group flex-shrink-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 inset-0 bg-[#838bb1] relative p-1 rounded-2xl text-white hover:text-amber-600 transition-colors duration-200 hover:bg-orange-500 z-10 group-hover:mr-24">
                    <path d="m13.28 7.78 3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06ZM2 17.25v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22a.75.75 0 0 1 1.06 1.06L4.56 16.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.747.747 0 0 1-.75-.75ZM12.22 13.28l3.22 3.22h-2.69a.75.75 0 0 0 0 1.5h4.5a.747.747 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06ZM3.5 4.56l3.22 3.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V4.56Z" />
                    </svg>
                      <span className="absolute z-0 left-7 top-1/2 -translate-y-1/2 translate-x-[-1rem] opacity-0 text-black whitespace-nowrap transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                        VIEW MORE
                      </span>
                    </div>
                  </div>
                   </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
