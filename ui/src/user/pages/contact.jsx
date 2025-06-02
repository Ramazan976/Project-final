import React from "react";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <div>
            {/* Banner Section */}
            <section className="relative h-[400px] w-full bottom-20 overflow-hidden">
                <img
                    src="https://preview.colorlib.com/theme/karma/img/banner/common-banner.jpg"
                    alt="Banner"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-end justify-end gap-3 px-4 md:px-12 lg:px-40 pb-20 z-10 text-right">
                    <h2 className="font-bold text-4xl text-white">Contact Us</h2>
                    <div className="flex flex-row gap-2 text-white">
                        <a href="/" className="">Home</a>
                        <i className="fa-solid fa-arrow-right pt-1"></i>
                        <span className="cursor-pointer">Contact</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="mx-auto w-[90%] lg:w-[70%] mb-16 space-y-12">

                {/* Google Map */}
                <iframe
                    className="w-full h-[400px] md:h-[500px]"
                    frameBorder="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                ></iframe>

                {/* Contact Info & Form */}
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <div className="flex gap-4 items-start">
                            <i className="fa-solid fa-home text-yellow-500 mt-1"></i>
                            <div>
                                <p className="font-bold">California, United States</p>
                                <p className="text-gray-600">Santa Monica Boulevard</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <i className="fa-solid fa-phone text-yellow-500 mt-1"></i>
                            <div>
                                <p className="font-bold">00(440)4444 542</p>
                                <p className="text-gray-600">Mon to Fri 9am to 6 pm</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <i className="fa-regular fa-envelope text-yellow-500 mt-1"></i>
                            <div>
                                <p className="font-bold">info@example.com</p>
                                <p className="text-gray-600">Bizə e-poçt göndərin</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-4">
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    className="peer border border-gray-300 w-full px-4 h-10 outline-none rounded"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="name" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-placeholder-shown:visible peer-focus:invisible">
                                    Enter your name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer border border-gray-300 w-full px-4 h-10 outline-none rounded"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="email" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-placeholder-shown:visible peer-focus:invisible">
                                    Enter email address
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="subject"
                                    className="peer border border-gray-300 w-full px-4 h-10 outline-none rounded"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="subject" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-placeholder-shown:visible peer-focus:invisible">
                                    Enter subject
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <textarea
                                id="message"
                                className="w-full h-32 border border-gray-300 p-4 resize-none rounded outline-none"
                                placeholder="Enter message"
                                required
                            ></textarea>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded transition">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
