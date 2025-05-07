import { useRef, useState } from "react";
import NumberInput from "../components/NumberInput";
import StarRating from "../components/StarRating";
import DealsofTheWeek from "../components/DealsofTheWeek";

const images = [
  "https://preview.colorlib.com/theme/karma/img/category/s-p1.jpg",
  "https://preview.colorlib.com/theme/karma/img/category/s-p1.jpg",
  "https://preview.colorlib.com/theme/karma/img/category/s-p1.jpg",
]

function ProductDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const sliderRef = useRef(null);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    const scrollTo = sliderRef.current.offsetWidth * index;
    sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative h-[400px] w-full bottom-38">
        <img src="https://preview.colorlib.com/theme/karma/img/banner/common-banner.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative flex flex-col items-end gap-3 w-full pr-72 pt-56">
          <h2 className="font-bold text-4xl text-white text-center">Product Details Page</h2>
          <div className="flex flex-row justify-start gap-2">
            <a href="/" className="text-white">Home</a>
            <i className="fa-solid fa-arrow-right text-white pt-1"></i>
            <a href="#" className="text-white">Shop</a>
            <i className="fa-solid fa-arrow-right text-white pt-1"></i>
            <a href="" className="text-white">product-details</a>
          </div>
        </div>
      </section>


      <div className="flex flex-row gap-10 justify-center items-center mt-10 mb-20">
        <div className="relative w-[500px] h-[350px] overflow-hidden transition-all duration-200">

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hidden scroll-smooth h-full" ref={sliderRef}>
            {images.map((images, index) => (
              <img key={index} src={images} alt="product" className="w-full h-full object-cover shrink-0 snap-center" />
            ))}
          </div>

          <div className="absolute bottom-3 right-3 flex flex-col gap-2 px-3 py-35 ">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-6 h-1 rounded-full cursor-pointer transition-all duration-300  ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                  }`}
              ></span>
            ))}
          </div>
        </div>


        <div className="flex flex-col w-[450px]">
          <h3 className="text-black text-2xl font-medium">Faded SkyBlu Denim Jeans</h3>
          <p className="text-amber-400 text-[25px] font-bold mb-4">$149.99</p>
          <div className="grid grid-cols-2 gap-1 w-50">
            <p className="text-[#555555]">Category</p>
            <p className="text-amber-500"><span className="pr-1">:</span>Household</p>
            <p className="text-[#555555]">Availibility</p>
            <p className="text-[#555555]"><span className="pr-1">:</span>In Stock</p>
          </div>
          <div className="border-b border-gray-200 mt-7 mb-7"></div>
          <p className="text-[#777777] mb-20">Mill Oil is an innovative oil filled radiator with the most modern technology. if you are looking for something that can  make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
          <p className="flex flex-row gap-3 items-center text-[#555555]">Quantity:<NumberInput /></p>
        </div>
      </div>

      <section className="border-0 h-13 w-[990px] border-[#777777] bg-[#E8F0F2] mx-auto flex items-center justify-center">
        <div className="flex gap-4 font-sans">
          <button
            onClick={() => setActiveTab("description")}
            className={`bg-white w-35 h-9 ${activeTab === "description" ? "!bg-amber-500 text-white" : "text-black"
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specification")}
            className={`bg-white w-35 h-9 ${activeTab === "specification" ? "!bg-amber-500 text-white" : "text-black"
              }`}
          >
            Specification
          </button>
          <button
            onClick={() => setActiveTab("comments")}
            className={`bg-white w-35 h-9 ${activeTab === "comments" ? "!bg-amber-500 text-white" : "text-black"
              }`}
          >
            Comments
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`bg-white w-35 h-9 ${activeTab === "reviews" ? "!bg-amber-500 text-white" : "text-black"
              }`}
          >
            Reviews
          </button>
        </div>
      </section>

      <div className="border-2 w-[990px] mx-auto mt-4 mb-30 p-4">
        {activeTab === "description" && (
          <p className="text-[#777777]">Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .
            Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office.
            After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company.
            Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts.
            It was aptly named ‘Hangover’ by Beryl’s husband and
            <br />
            <br />
            It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to
            learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less
          </p>
        )}

        {activeTab === "specification" && (
          <div className="grid grid-cols-2 gap-y-2 p-4 max-w-[800px] mx-auto mt-4">
            <div className="text-[#777777]">Width</div>
            <div className="text-[#777777]">128mm</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">Height</div>
            <div className="text-[#777777]">508mm</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">Depth</div>
            <div className="text-[#777777]">85mm</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">Weight</div>
            <div className="text-[#777777]">52gm</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">Quality checking</div>
            <div className="text-[#777777]">yes</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">Freshness Duration</div>
            <div className="text-[#777777]">03days</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">When packeting</div>
            <div className="text-[#777777]">Without touch of hand</div>
            <div className="col-span-2 border-b border-gray-200"></div>

            <div className="text-[#777777] ">Each Box contains</div>
            <div className="text-[#777777]">60pcs</div>
          </div>
        )}

        {activeTab === "comments" && (
          <div className="flex flex-col md:flex-row gap-8 p-4">

            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex flex-col gap-2 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://preview.colorlib.com/theme/karma/img/product/review-${index + 1}.png`}
                      alt="User"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">Blake Ruiz</p>
                      <p className="text-[#777777] text-sm">12th Feb, 2018 at 05:56 pm</p>
                    </div>
                    <button className="border px-6 py-1 text-black rounded-2xl hover:!bg-amber-400  hover:text-white  transition">
                      Reply
                    </button>
                  </div>
                  <p className="text-[#777777] max-w-[450px] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>


            <div className="flex flex-col gap-4 w-full max-w-[450px]">
              <h3 className="text-xl font-semibold">Post a comment</h3>
              <input type="text" placeholder="Your Full name" className="border px-3 py-2 rounded" />
              <input type="email" placeholder="Email Address" className="border px-3 py-2 rounded" />
              <input type="tel" placeholder="Phone Number" className="border px-3 py-2 rounded" />
              <textarea placeholder="Message" className="border px-3 py-2 rounded resize-none" rows={4}></textarea>
              <button className="!bg-amber-400 self-end text-white font-medium py-2 w-40 rounded hover:bg-amber-500 transition">
                Submit Now
              </button>
            </div>
          </div>
        )}


        {activeTab === "reviews" && (
          <div className="flex flex-col md:flex-row gap-8 ">
            
            <div className="flex flex-col">

            <div className="flex flex-row gap-9 mb-8">
            <div className="h-40 w-45 border-0 flex flex-col justify-center items-center bg-[#E8F0F2]">
              <h2 className="text-2xl font-medium">Overall</h2>
              <p className="text-amber-500 text-5xl font-bold">4.0</p>
              <p className="text-[#777777] font-medium">(03 Reviews)</p>
            </div>

            <div className="flex flex-col">
              <h3 className="font font-medium">Based on 3 Reviews</h3>
              <div className="w-40">
                <p className="text-[#777777] flex flex-row">5 Star <StarRating /> 01</p>
                <p className="text-[#777777] flex flex-row">4 Star <StarRating /> 01 </p>
                <p className="text-[#777777] flex flex-row">3 Star <StarRating /> 01 </p>
                <p className="text-[#777777] flex flex-row">2 Star <StarRating /> 01 </p>
                <p className="text-[#777777] flex flex-row">1 Star <StarRating /> 01 </p>
              </div>
            </div>
            </div>

            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex flex-col gap-2 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://preview.colorlib.com/theme/karma/img/product/review-${index + 1}.png`}
                      alt="User"
                      className="w-16 h-16 object-cover"
                      />
                    <div className="flex flex-col">
                      <p className="font-semibold">Blake Ruiz</p>
                      <StarRating />
                    </div>
                  </div>
                  <p className="text-[#777777] max-w-[450px] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-[450px]">
              <h3 className="text-2xl font-semibold">Add a Review</h3>
              <p className="text-[#777777] flex flex-row gap-3">Your Rating: <StarRating /> Outstanding </p>
              <input type="text" placeholder="Your Full name" className="border px-3 py-2 rounded" />
              <input type="email" placeholder="Email Address" className="border px-3 py-2 rounded" />
              <input type="tel" placeholder="Phone Number" className="border px-3 py-2 rounded" />
              <textarea placeholder="Review" className="border px-3 py-2 rounded resize-none" rows={4}></textarea>
              <button className="!bg-amber-400 self-end text-white font-medium py-2 w-40 rounded hover:bg-amber-500 transition">
                Submit Now
              </button>
            </div>
          </div>
        )}
      </div>
      
        <DealsofTheWeek />
    </>
  );
}

export default ProductDetails;