import React from 'react';
import logo from '../images/kumher_news_logo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Column 1: Menu */}
        <div>
            <p className="font-bold mb-4">About Us</p>
            <img src={logo} alt='kumjher news' className='w-[300px] mx-auto' />
            <p className='px-10 mb-4'>Kumher NEWS is a leading news source for the Indian subcontinent.</p>
       
        </div>

        {/* Column 2: Social Media */}
        <div>
          <p className="font-bold mb-4">Quick Links</p>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/latest-news" className="hover:underline">Latest News</a>
              </li>
              <li>
                <a href="/category-news" className="hover:underline">Category News</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Column 3: Copyright & Info */}
        
      
        <div>
          <p className="font-bold mb-4">Follow us on</p>
          <div className=" justify-center space-x-4">
            <ul>
                <li>
                <a href="https://facebook.com" className="hover:text-blue-500">Facebook</a>
                </li>
                <li>
                <a href="https://twitter.com" className="hover:text-blue-300">Twitter</a>

                </li>
            <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
                <li>

                </li>

            </ul>
         
          </div>
        </div>
      </div>
      <p className='text-center mt-10'>&copy; 2024 Kumher NEWS. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
