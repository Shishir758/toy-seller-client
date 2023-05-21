import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../useTitle';
import Swal from 'sweetalert2';
import { AuthContext } from './provider/AuthProviders';

const Alltoys = () => {
  const { user } = useContext(AuthContext);
  useTitle('All Toys')
  const [searchText, setSearchText] = useState('');
  const [toys, setToys] = useState([]);
  const [sort, setSort] = useState('low');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch('https://toy-serer-side.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-serer-side.vercel.app/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const handleViewToy = () => {
    if (!user) {
      Swal.fire({
        title: 'Want to view Details?',
        text: 'You have login first to view details.',
        icon: 'info',
        confirmButtonText: 'Close',
      });
    }
  };
  const handleSortLowestPrice = () => {
    const sorted = toys.slice().sort((a, b) => a.price - b.price);
    setToys(sorted);
    setSortOrder('asc');
  };
  const handleSortHighestPrice = () => {
    const sorted = toys.slice().sort((a, b) => b.price - a.price);
    setToys(sorted);
    setSortOrder('desc');
  };


  return (
    <>
      <Header />
      <div className="search-box p-2 text-center border-b-slate-400 mt-4">
        <button className='btn bg-blue-500 p-2 text-white rounded-xl' onClick={handleSortLowestPrice}>Lowest Price</button>
        <button className='btn ml-8 bg-blue-500 p-2 text-white rounded-xl' onClick={handleSortHighestPrice}>Highest Price</button>

        <button className='btn ml-8 bg-blue-500 p-2 text-white rounded-xl'
          onClick={() => window.location.reload()}>Show All</button>

        <br></br><br></br>

        <input onChange={(event) => setSearchText(event.target.value)} class="shadow appearance-none border rounded mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />

        <button className="btn bg-blue-500 p-2 text-white rounded-xl"
          onClick={handleSearch}>Search</button>

      </div>
      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:mx-8 mx-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {toys.length > 0 ? (
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">Sl</th>
                      <th scope="col" className="px-6 py-4">Seller</th>
                      <th scope="col" className="px-6 py-4">Toy Name</th>
                      <th scope="col" className="px-6 py-4">Sub Category</th>
                      <th scope="col" className="px-6 py-4">Price</th>
                      <th scope="col" className="px-6 py-4">Avail.Quant.</th>
                      <th scope="col" className="px-6 py-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toys.map((toy, index) => (
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600" key={toy._id}>
                        <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                        <td className="whitespace-nowrap px-6 py-4">{toy.sellerName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{toy.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{toy.subCategory}</td>
                        <td className="whitespace-nowrap px-6 py-4">{toy.price}</td>
                        <td className="whitespace-nowrap px-6 py-4">{toy.quantity}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link to={`/ViewToy/${toy._id}`}><button onClick={handleViewToy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                            View Toy</button></Link></td></tr>))}
                  </tbody>
                </table>) : (<p className="text-center">No toys found.</p>)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Alltoys;