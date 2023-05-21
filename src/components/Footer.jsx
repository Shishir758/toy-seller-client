import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProviders';
import logo from '../assest/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  const { loading } = useContext(AuthContext);

  if (loading) {
    return
  }

  return (
    <footer className="bg-gray-100 py-6 mt-5">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3">


        <div className="flex items-center flex-shrink-0 ml-16">
        <img src={logo} className="h-[65px] w-[65px] rounded-full inline-block border border-b-slate-200" alt="" />
        <h1 className="ml-4 font-bold text-red-500 text-3xl tracking-tight">Findus Toys</h1>
        </div>

          <p className="text-gray-600">Selling the best baby car toys for your little ones.</p>
        </div>

        <div className="w-full md:w-1/3 text-center my-4">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-600">
            Email: info@findustoys.com<br />
            Phone: 123-456-7890<br />
            Address: 123 Main St, City, State
          </p>
        </div>
        
        <div className="w-full md:w-1/3 text-center mb-4">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center">
          <a href="#" className="text-blue-500 hover:text-gray-600 mr-2">
          <FontAwesomeIcon style={{ width: "30px", height: "30px" }}  icon={faFacebook}/></a>
          <a href="#" className="text-blue-500 hover:text-gray-600 mr-2">
          <FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faTwitter}/></a>
          <a href="#" className="text-blue-500 hover:text-gray-600 mr-2">
          <FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faInstagram}/></a>
          <a href="#" className="text-blue-500 hover:text-gray-600 mr-2">
          <FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faYoutube}/></a>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4">
      <p className="text-center text-gray-600">
        &copy; 2023 Findus Toys. All rights reserved.
      </p>
    </div>
  </footer>
  
  );
}

export default Footer;
