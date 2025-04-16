import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../image/logo-removebg-preview.png';

const Navbar = () => {
    const [showInput, setShowInput] = useState(false);

    
    const handleLogoClick = (event) => {
        event.preventDefault(); 
        window.location.href = '/'; 
    }

   
    const toggleInput = (event) => {
        event.preventDefault(); 
        setShowInput(prev => !prev); 
    };

    return (
        <>
            <nav className="w-full bg-white sticky top-0 z-50 shadow-sm ">
                <div className=" px-6 py-4 flex justify-between items-center mt-10 h-[80px] ">
                    <div onClick={handleLogoClick} className="cursor-pointer">
                        <img src={Logo} alt="logo" style={{ height: '50px' }} />
                    </div>

                    <div className="flex gap-x-12 items-center">
                        <Link to="/" className="text-[12px] font-medium text-amber-500">HOME</Link>
                        <Link to="/shop" className="text-[12px] font-medium hover:text-amber-500">SHOP</Link>
                        <Link to="/pages" className="text-[12px] font-medium hover:text-amber-500">PAGES</Link>
                        <Link to="/contact" className="text-[12px] font-medium hover:text-amber-500">CONTACT</Link>

                        <div className="flex gap-x-6">
                            <span><i className="fa-solid fa-bag-shopping"></i></span>
                            <span><i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={toggleInput}></i></span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`transition-all duration-300 ease-in-out px-6 py-2 w-full ${showInput ? 'opacity-100' : 'opacity-0'} ${showInput ? 'translate-y-0' : 'translate-y-2'} ${showInput ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {showInput && (
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                        placeholder="Search Here"
                        autoFocus
                    />
                )}
            </div>
        </>
    );
};

export default Navbar;
