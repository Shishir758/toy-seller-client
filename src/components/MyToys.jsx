import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../useTitle';
import Footer from './Footer';
import Header from './Header';
import { AuthContext } from './provider/AuthProviders';

const MyToys = () => {
  useTitle('My Toys')
  const alltoys = useLoaderData();
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    fetch(`https://toy-serer-side.vercel.app/products/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [jobs, user]);



const handleDelete =(id)=>{
  console.log(id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
  
  .then((result) => {
    if (result.isConfirmed) {

      fetch(`https://toy-serer-side.vercel.app/products/${id}`,{
        method: 'delete'
      })


      .then(res => res.json())

      
      .then(data =>{
        console.log(data)
        if(data.deletedCount > 0){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          }
      })
     
    }
  })
}


  return (
    <>
      <Header></Header>
      <div>
        <div className="my-jobs-container">
          <h1 className="text-center p-4 font-bold text-xl ">ALL My Toys</h1>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        {/* <th scope="col" className="px-6 py-4">#</th> */}
                        <th scope="col" className="px-6 py-4">Seller</th>
                        <th scope="col" className="px-6 py-4">Toy Name</th>
                        <th scope="col" className="px-6 py-4">Sub Category</th>
                        <th scope="col" className="px-6 py-4">Price</th>
                        <th scope="col" className="px-6 py-4">Avail.Quant.</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        jobs.map(toy => <tr key={toy._id}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td className="whitespace-nowrap px-6 py-4">{toy.sellerName}</td>
                          <td className="whitespace-nowrap px-6 py-4">{toy.name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{toy.subCategory}</td>
                          <td className="whitespace-nowrap px-6 py-4">{toy.price}</td>
                          <td className="whitespace-nowrap px-6 py-4">{toy.quantity}</td>



                          <Link to={`/updateAtoy/${toy._id}`}>
                            <button className='mb-3 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'>
                              Update
                            </button>
                          </Link>

                          
                            <button onClick ={()=>handleDelete(toy._id)} className='mb-3 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'>
                              Delete
                            </button>
                        

                        </tr>)
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyToys;