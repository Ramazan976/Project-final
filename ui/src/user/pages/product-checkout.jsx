import React from "react";


function ProductCheckout() {
    
    return (
        <>
         <section className="relative h-[400px] w-full bottom-20 overflow-x-hidden">
            <img src="https://preview.colorlib.com/theme/karma/img/banner/common-banner.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-end gap-3 px-4 md:px-12 lg:px-40 pt-52 z-10 max-w-screen-xl mx-auto">
          <h2 className="font-bold text-4xl text-white text-center">Checkout</h2>
          <div className="flex flex-row justify-start gap-2">
            <a href="/" className="text-white">Home</a>
            <i className="fa-solid fa-arrow-right text-white pt-1"></i>
            <a href="#" className="text-white">Shop</a>
            <i className="fa-solid fa-arrow-right text-white pt-1"></i>
            <a href="" className="text-white">checkout</a>
          </div>
          </div>
          </section>

      <div className="flex items-center justify-center flex-col mt-8 gap-4">
      <div className="flex items-center border-0 p-2 pl-8 w-6xl bg-[#E8F0F2]">
        <p className="">Returning Customer? <a href="#" className="text-red-600">Click here to login</a></p>
      </div>
      <div className="flex flex-col pl-4 justify-center gap-7">
      <p className="text-[#777777]">If you have shopped with us before, please enter your details in the boxes below. 
        If you are a new customer, please proceed to the Billing & Shipping section.</p>
      
      <div className="flex flex-row gap-8">
      <div className="flex flex-row gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-70 px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Username or Email
      </label>
      <span className="text-red-500 absolute right-30 top-1/2 -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      <div className="flex flex-row gap-3 relative w-fit">
      <input type="password" placeholder="" className="peer border border-gray-200 w-70 px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Password
      </label>
      <span className="text-red-500 absolute left-24 top-1/2 -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      </div>


      <div className="flex flex-row gap-5 items-center">
      <button className="!bg-amber-400 text-white font-medium py-2 w-30 rounded hover:bg-amber-500 transition">
        LOGIN
      </button>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="text-gray-500">Remember me</label>
      </div>
      <p className="text-gray-500 pb-5 cursor-pointer">Lost your password?</p>      
      </div>

      </div>   


      <div className="flex items-center justify-center flex-col mb-28 gap-4">
      <div className="flex items-center border-0 p-2 pl-8 w-6xl bg-[#E8F0F2]">
        <p className="">Have a coupon? <a href="#" className="text-red-600"> Click here to enter your code</a></p>
      </div>
      <div className="flex w-6xl pl-8">
      <input type="text" placeholder="Enter coupon code" className="outline-0 border border-gray-200 px-4 h-10 w-2xl placeholder:!text-gray-500 "/>
      </div>

      <div className="flex w-6xl pl-8">
      <button className="bg-white text-black border font-medium py-2 w-50 rounded hover:!bg-amber-500 hover:text-white transition">
        APPLY COUPON
      </button>
      </div>

      <div className="flex gap-32">
       <div className="flex flex-col gap-5">
      <div className="flex items-center max-w-6xl mb-5">
      <h3 className="text-lg pb-2 font-medium border-b w-[96%]">Billing Details</h3>
      </div>
      <div className="flex gap-8 max-w-6xl">
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-80 px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        First name
      </label>
      <span className="text-red-500 absolute right-56 top-1/2 -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-80 px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Last name
      </label>
      <span className="text-red-500 absolute right-56 top-1/2 -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      </div>     
      
      <div className="flex max-w-6xl">
      <input type="text" placeholder="Company name" className="outline-0 border border-gray-200 px-4 h-10 w-2xl placeholder:!text-gray-500 "/>
      </div>
      
      <div className="flex gap-8 max-w-6xl">
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-80 px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Phone number
      </label>
      <span className="text-red-500 absolute right-48 top-1/2 -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-80 px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Email Address
      </label>
      <span className="text-red-500 absolute right-48 top-1/2 -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      </div>
      
      <div className="flex max-w-6xl">
      <select className="w-2xl border outline-0 px-4 h-10 text-gray-500" name="Country" id="Country">
        <option value="">Country</option>
        <option value="">Country</option>
        <option value="">Country</option>
      </select>
      </div>

      <div className="flex flex-col gap-5 max-w-6xl">
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-2xl px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Address line 01
      </label>
      <span className="text-red-500 absolute right-48 left-32 top-1/2 pointer-events-none -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-2xl px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Address line 02
      </label>
      <span className="text-red-500 absolute right-48 left-32 top-1/2 pointer-events-none -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      <div className="flex gap-3 relative w-fit">
      <input type="email" placeholder="" className="peer border border-gray-200 w-2xl px-4 h-10 outline-0"/>
      <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
        Town/city
      </label>
      <span className="text-red-500 absolute right-48 left-24 top-1/2 pointer-events-none -translate-y-1/2 text-lg peer-focus:hidden peer-placeholder-shown:inline">*</span>
      </div>
      </div>

       <div className="flex max-w-6xl">
      <select className="w-2xl border outline-0 px-4 h-10 text-gray-500" name="District" id="Country">
        <option value="">District</option>
        <option value="">District</option>
        <option value="">District</option>
      </select>
      </div>

      <div className="flex max-w-6xl">
      <input type="text" placeholder="Postcode/ZIP" className="outline-0 border border-gray-200 px-4 h-10 w-2xl placeholder:!text-gray-500 "/>
      </div>
      <div className="flex max-w-6xl gap-5">
      <input type="checkbox" name="" id="create"/>
      <label htmlFor="create" className="text-gray-500">Create an account?</label>
      </div>

      <div className="flex items-center max-w-6xl mb-4">
      <h3 className="text-lg pb-2 font-medium border-b w-[96%]">Shipping Details</h3>
      </div>

      <div className="flex max-w-6xl gap-5">
      <input type="checkbox" name="" id="ship"/>
      <label htmlFor="ship" className="text-gray-500">Ship to a different address?</label>
      </div>

      <div className="flex max-w-6xl">
        <textarea className="w-2xl h-[120px] resize-none border border-gray-200 px-4" placeholder="Order Notes"></textarea>
      </div>
      </div> 

  
      <div className="flex flex-col pl-7 border-0 w-[350px] bg-[#E5ECEE] border-gray-400">
      <p className="border-b mb-5 pb-2 w-70 mt-4 border-gray-300 text-lg font-medium ">Your Order</p>
      
      <div className="flex flex-col gap-5 max-w-[280px]">
        <div className="flex flex-row justify-between">
        <p className="text-gray-500">Product</p>
        <p className="text-gray-500">Total</p>
        </div>
        <div className="flex flex-row justify-between">
        <p className="text-gray-500">Fresh Blackberry</p>
        <p className="">x 02</p>
        <p className="text-gray-500">$720.00</p>
        </div>
        <div className="flex flex-row justify-between">
        <p className="text-gray-500">Fresh Tomatoes</p>
        <p className="">x 02</p>
        <p className="text-gray-500">$720.00</p>
        </div>
        <div className="flex flex-row justify-between">
        <p className="text-gray-500">Fresh Brocoli</p>
        <p className="">x 02</p>
        <p className="text-gray-500">$720.00</p>
        </div>
        <div className="flex flex-row justify-between">
        <p className="font-medium">SUBTOTAL</p>
        <p className="text-gray-500">$2160.00</p>
        </div>
        <div className="flex flex-row justify-between">
        <p className="font-medium">SHIPPING</p>
        <p className="text-gray-500">Flat Rate: $50.00</p>
        </div>
        <div className="flex flex-row justify-between">
        <p className="font-medium">TOTAL</p>
        <p className="font-medium">$2210.00</p>
        </div>
        
        <div className="flex flex-row gap-3">
          <input type="checkbox" className="" name="" id="payment" />
          <label htmlFor="payment">CHECK PAYMENTS</label>
        </div>
        <p className="text-gray-500 bg-white w-70 p-4"> Please send a check to Store Name,
           Store Street, Store Town, Store State / County, Store Postcode.
        </p>
        
        <div className="flex flex-row gap-3">
          <input type="checkbox" className="" name="" id="payment" />
          <label htmlFor="payment" className="pr-20">PAYPAL</label>
          <img src="https://mondanibooks.com/wp-content/uploads/2017/12/paypal.png" alt="" className="w-20" />
        </div>
        <p className="text-gray-500 bg-white w-70 p-4"> Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
           account.
        </p>
        <div className="flex flex-row">
        <input type="checkbox" name="" id="terms" />
        <label htmlFor="terms" className="text-[13px]">I’ve read and accept the <a href="#" className="text-red-700 text-[14px]">terms & conditions*</a></label>
        </div>

        <div className="flex mb-5">
        <button className="!bg-amber-500 text-white border font-medium py-2 w-80 rounded transition">
          PROCEED TO PAYPAL
        </button>
        </div>

      </div>

      </div>

      </div>      


      </div>

        </>
    )

}

export default ProductCheckout;