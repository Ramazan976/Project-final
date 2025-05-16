import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../image/logo-removebg-preview.png';

const Navbar = () => {
    const [showInput, setShowInput] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = (event) => {
        event.preventDefault();
        window.location.href = '/';
    };

    const toggleInput = (event) => {
        event.preventDefault();
        setShowInput(prev => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    return (
        <>
            <nav className="w-full bg-white sticky top-0 z-50 shadow-sm ">
                <div className="px-32 py-0 flex justify-between items-center mt-3 min-h-[30px]">
                    <div onClick={handleLogoClick} className="cursor-pointer">
                        <img src={Logo} alt="logo" style={{ height: '50px' }} />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-x-12 items-center">
                        <Link to="/" className="text-[12px] font-medium !text-amber-500 h-8 flex items-center justify-center">HOME</Link>
                        
                        <div className="relative group h-8 flex items-center justify-center">
                        <span className="text-[12px] font-medium hover:!text-amber-500 cursor-pointer">SHOP</span>
                        <div className="absolute left-0 top-14 opacity-0 group-hover:opacity-100 group-hover:block bg-white w-44 z-10 font-bold transition-all duration-300 ease-in-out">
                        <Link to="/shop/product-details" className="!text-amber-500 hover:!text-white hover:bg-amber-500 text-[14px] h-8 flex items-center justify-center">PRODUCT DETAILS</Link>
                        <div className="border-b border-gray-200"></div>
                        <Link to="/shop/product-checkout" className="!text-amber-500 hover:!text-white hover:bg-amber-500 h-8 text-[14px] flex items-center justify-center">PRODUCT CHECKOUT</Link>
                        </div>
                        </div>

                        <div className="relative group h-8 flex items-center justify-center">
                        <span className="text-[12px] font-medium hover:!text-amber-500 cursor-pointer">PAGES</span>
                        <div className="absolute left-0 top-14 opacity-0 group-hover:opacity-100 group-hover:block bg-white w-44 font-bold h-8 z-10 transition-all duration-300 ease-in-out">
                        <Link to="/pages/login" className="!text-amber-500 hover:!text-white hover:bg-amber-500 h-8 text-[14px] flex items-center justify-center">LOGIN</Link>
                        </div>
                        </div>    
                        
                        <Link to="/contact" className="text-[12px] font-medium hover:!text-orange-400">CONTACT</Link>

                        <div className="flex gap-x-6">
                            <span><i className="fa-solid fa-bag-shopping" onClick={() => navigate('/cart')} ></i></span>
                            <span><i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={toggleInput}></i></span>
                        </div>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="text-xl text-amber-500">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className={`absolute top-full left-0 w-full px-32 py-4 bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Link to="/" className="block text-[12px] font-medium !text-amber-500 py-2">HOME</Link>
                        <Link to="/shop" className="block text-[12px] font-medium hover:!text-amber-500 py-2">SHOP</Link>
                        <Link to="/pages" className="block text-[12px] font-medium hover:!text-amber-500 py-2">PAGES</Link>
                        <Link to="/contact" className="block text-[12px] font-medium hover:!text-orange-400 py-2">CONTACT</Link>

                        <div className="flex gap-x-6 mt-2">
                            <span><i className="fa-solid fa-bag-shopping"></i></span>
                            <span><i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={toggleInput}></i></span>
                        </div>
                    </div>
                )}

                {/* Search Input */}
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
            </nav>
        </>
    );
};

export default Navbar;
