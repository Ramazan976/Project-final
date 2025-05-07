import React from "react";

const AboutUs = () => (
    <div className="flex flex-col gap-5 max-w-[20%] ">
    <h3 className="font-bold">About Us</h3>
    <p className="text-[#777777]">By providing innovative and high-quality services, we meet the needs of our clients. Our goal is to create an excellent experience and build reliable partnerships.</p>
    </div>
);

const Newsletter = () => (
    <div className="flex flex-col gap-5">
    <h3 className="font-bold">Newsletter</h3>
    <p className="text-[#777777]">Stay update with our latest</p>
    <div className="flex items-center">
    <input type="text" placeholder="Enter Email" className="bg-white text-black h-9 w-60 pl-5"/>
    <button className="w-10 h-9" style={{ background:"#FFA500"}}>
    <i className="fa-solid fa-arrow-right"></i>
    </button>
    </div>
    </div>
);

const InstagramFeed = () => {
    const images = Array.from({length: 8}, (_,i) => `https://preview.colorlib.com/theme/karma/img/i${i + 1}.jpg`);
    return (
        <div className="flex flex-col gap-5">
        <h3 className="font-bold">Instagram Feed</h3>
        <div className="grid grid-cols-4 gap-2">
           {images.map((src, index) => (
            <img key={index} src={src} alt={`instagram-${index}`} />
           ))}
        </div>
        </div>
    );
};

const FollowUs = () => (
    <div className="flex flex-col gap-5">
        <h3 className="font-bold">Follow Us</h3>
        <p className="text-[#777777]">let us be social</p>
        <div className="flex flex-row gap-4">
        <i className="fa-brands fa-facebook-f text-gray-300 hover:!text-[#FFA500] cursor-pointer"></i>
        <i className="fa-brands fa-twitter text-gray-300 hover:!text-[#FFA500] cursor-pointer"></i>
        <i className="fa-brands fa-dribbble text-gray-300 hover:!text-[#FFA500] cursor-pointer"></i>
        <i className="fa-brands fa-behance text-gray-300 hover:!text-[#FFA500] cursor-pointer"></i>
        </div>
    </div>
);

function Footer() {
    return (
        <div className="text-white flex flex-col justify-center items-center gap-8 pt-20 pb-20 bg-[#222222] min-h-[400px]">
            <div className="flex flex-row gap-7 justify-center">
            <AboutUs />
            <Newsletter />
            <InstagramFeed />
            <FollowUs />
            </div>
            <div className="text-center py-10 mt-auto">
            <p className="text-[#777777]">Copyright ©2025 All rights reserved | This template is made with <i className="fa-regular fa-heart text-amber-500"></i> by <a href="https://colorlib.com" target="_blank" className="!text-amber-500">Colorlib</a></p>
            </div>
        </div>
    
    )

}
export default Footer