import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useLoaderData } from 'react-router-dom';

const Alltoys = () => {
  const [searchText, setSearchText] = useState('');
  const [toys, setToys] = useState([]);
  const alltoys = useLoaderData();

  console.log(alltoys);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  const handleSearch = () => {
    fetch(`http://localhost:5000/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  
  return (
    <>
      <Header />
      <div className="search-box p-2 text-center border-b-slate-400">
        <input
          onChange={(event) => setSearchText(event.target.value)}
          type="text"
          className="p-1"
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mt-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:mx-8 mx-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {toys.length > 0 ? (
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Seller
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Toy Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Sub Category
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Avail.Quant.
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                  
                  {toys.slice(0, 20).map((toy) => (
                      <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        key={toy._id}
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {toy.sellerName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {toy.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {toy.subCategory}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {toy.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {toy.quantity}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link to={`/ViewToy/${toy._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                              View Toy
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center">No toys found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Alltoys;
