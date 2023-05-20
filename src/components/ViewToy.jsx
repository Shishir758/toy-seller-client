import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../useTitle';

const ViewToy = () => {
  useTitle('View Toy')
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const [viewToy, setViewToy] = useState(null);

  useEffect(() => {
    fetch('https://toy-serer-side.vercel.app/products')
      .then(response => response.json())
      .then(data => setDetailsData(data))
  }, []);


  useEffect(() => {
    const matchingDetails = detailsData.find(detail => detail._id == id);
    console.log(matchingDetails);
    setViewToy(matchingDetails);
  }, [detailsData, id]);

  const { pictureUrl } = { viewToy };

  if (!viewToy) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto rounded overflow-hidden shadow-lg">
        <img className="w-full text-center" src={viewToy.pictureUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Toy's Name: '{viewToy.name}' <span><Rating style={{ maxWidth: 100 }} defaultvalue={viewToy?.rating} readOnly/> <span className="ml-2">{viewToy.rating}</span></span></div>

          <p className="text-gray-700 text-base"><b>Discription:</b></p>
          <p className="text-gray-700 text-base">{viewToy.description}</p>

        </div>

        <div className="px-6 pt-4 pb-2 text-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: USD$ {viewToy.price}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Available Qunt. {viewToy.quantity}</span><br></br>
 

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Seller: {viewToy.sellerName}</span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Seller Email: {viewToy.sellerEmail}</span>
          <p className='mt-4 mb-4'><Link to="/alltoys"  className='bg-blue-500 rounded-md text-white text-bold p-2 my-2'>See all toys</Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewToy;
