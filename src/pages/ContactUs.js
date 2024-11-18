import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have any questions, suggestions, or feedback? We'd love to hear from you.
        </p>

        <div className="flex flex-wrap justify-between items-start">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-10">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              You can reach us at our office or drop an email at any time.
            </p>
            <ul>
              <li className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-red-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.862 8.487l3.375-1.95M9 12V4m0 0L3.4 8.553m5.6-4.553v8.438m0 0l-6.548-3.792M21 8.51l-6.548 3.793M16.862 8.487V18M12.21 15.206L9 17.195m6-8.602L9 3.755"
                  />
                </svg>
                123 News Avenue, City, Country
              </li>
              <li className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-red-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7-5 7 5v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                </svg>
                info@newswebsite.com
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13 12m4.657 4.657L19.414 20m-2.343-3.343A8 8 0 118 5.657l4.343 4.343M5.343 5.343a8 8 0 0111.314 0m0 0L19.414 4M5.343 19.657a8 8 0 010-11.314m0 11.314L4 19.414"
                  />
                </svg>
                +123-456-7890
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 lg:w-2/3">
            <form className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-red"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
