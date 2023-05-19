import React, { useContext, useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { AuthContext } from './provider/AuthProviders';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../useTitle';

const AddAtoy = () => {
  useTitle('Add A Toy')
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  const [toyData, setToyData] = useState({
    pictureUrl: '',
    name: '',
    sellerName: '', // Retrieve this from the logged-in user
    sellerEmail: '', // Retrieve this from the logged-in user
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: '',
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setToyData((prevData) => ({
          ...prevData,
          sellerName: user.displayName || '',
          sellerEmail: user.email || '',
        }));
      }
    });

    return () => unsubscribe(); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/products',{
      method: 'post',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(toyData)
    })
    .then(res=>res.json())
    .then(data =>{console.log(data)});
    toast.success('Data sent successfully!');
  };


  if (loading) {
    return <div>Loading...</div>;
  }
    return (
        <>
        <Header></Header>
        <div className='md:mx-48 lg:mx-48 mx-8'>
      <h2 className="text-2xl font-bold mb-4 text-center">Add A Toy</h2>
      <form id="toyForm" onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="pictureUrl" className="text-lg font-semibold mb-1">
            Picture URL of the toy:
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            value={toyData.pictureUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={toyData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sellerName" className="text-lg font-semibold mb-1">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            value={user?user.displayName:"N/A"}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sellerEmail" className="text-lg font-semibold mb-1">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            value={user?user.email:"N/A"}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subCategory" className="text-lg font-semibold mb-1">
            Sub-category:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            value={toyData.subCategory}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          >
            <option value="">Select a sub-category</option>
            <option value=">Regular Toy Car">Regular Toy Car</option>
            <option value="Police Toy Car">Police Toy Car</option>
            <option value="Toy Truck">Toy Truck</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg font-semibold mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={toyData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="rating" className="text-lg font-semibold mb-1">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={toyData.rating}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-lg font-semibold mb-1">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={toyData.quantity}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-semibold mb-1">
            Detail Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={toyData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>

        <div className='text-center mb-8'><button 
          type="submit"
          className=" mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
        >
          Add Toy
        </button></div>
      </form>
    </div> 
    <ToastContainer></ToastContainer>
            <Footer></Footer>
        </>
    );
};

export default AddAtoy;





  

