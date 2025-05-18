import React from "react";

function Contact() {
    return (
        <div>
            <section className="relative h-[400px] w-full bottom-20 overflow-x-hidden">
        <img src="https://preview.colorlib.com/theme/karma/img/banner/common-banner.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-end gap-3 px-4 md:px-12 lg:px-40 pt-52 z-10 max-w-screen-xl mx-auto">
          <h2 className="font-bold text-4xl text-white text-center">Contact Us</h2>
          <div className="flex flex-row justify-start gap-2">
            <a href="/" className="text-white">Home</a>
            <i className="fa-solid fa-arrow-right text-white pt-1"></i>
            <a href="" className="text-white">Contact</a>
          </div>
        </div>
      </section>

      <div className="mx-auto mb-16 w-[70%]">
        <iframe className="mb-16" id="map-canvas" class="map_part" width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        
        <div className="flex flex-row gap-5">

        <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-5">
        <span><i className="fa-solid fa-home text-yellow-500"></i></span>
        <div className="flex flex-col">
        <p className="font-bold">California, United States</p>
        <p className="text-gray-600">Santa monica bullevard</p>
        </div>
        </div>

        <div className="flex flex-row items-center gap-5">
        <span><i className="fa-solid fa-phone text-yellow-500"></i></span>
        <div className="flex flex-col">
        <p className="font-bold">00(440)4444 542</p>
        <p className="text-gray-600">Mon to Fri 9am to 6 pm</p>
        </div>
        </div>
        
        <div className="flex flex-row items-center gap-5">
        <span><i className="fa-regular fa-envelope text-yellow-500"></i></span>
        <div className="flex flex-col">
        <p className="font-bold">California, United States</p>
        <p className="text-gray-600">Santa monica bullevard</p>
        </div>
        </div>
        
        </div>

        <div className="flex gap-3 flex-col">
            <div className="relative">
         <input type="email" placeholder="" className="peer border border-gray-200 w-100 px-4 h-9 outline-0"/>
            <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
              Enter your name
            </label>
            </div>
            <div className="relative">
         <input type="email" placeholder="" className="peer border border-gray-200 w-100 px-4 h-9 outline-0"/>
            <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
              Enter email address
            </label>
            </div>
            <div className="relative">
         <input type="email" placeholder="" className="peer border border-gray-200 w-100 px-4 h-10 outline-0"/>
            <label className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 peer-placeholder-shown:visible peer-focus:invisible pointer-events-none">
              Enter Subject
            </label>
            </div>

        </div>
        
        <div className="flex flex-col items-end gap-6">
        <textarea className="resize-none pt-3 px-4 w-100 h-34 border outline-0" placeholder="Enter Message"></textarea>
        <button className="!bg-amber-500 text-white h-12 w-40">
            SEND MESSAGE
        </button>
        </div>

        </div>

      </div>

        </div>
    )
}

export default Contact;