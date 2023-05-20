import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../useTitle';
import Footer from './Footer';
import Header from './Header';

const UpdateAtoy = () => {
  useTitle("Update Toy's Info ")
  const [singleToy, setSingleToy] = useState([]);
  const toys = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const toy = toys.find(toy => toy._id == id);
    setSingleToy(toy);
  }, [singleToy, id]);

const handleUpdate =(event)=>{
  event.preventDefault();
  const form = event.target;
  const price = form.price.value;
  const quantity = form.quantity.value;
  const description = form.description.value;
  const updateInfo ={price, quantity, description};

  Swal.fire({
    title: 'Are you sure?',
    text: "You will be able to update again!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, update it!'
  })
  .then((result) => {
    if (result.isConfirmed) {
      fetch(`https://toy-serer-side.vercel.app/products/${id}`,{
        method: 'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(updateInfo)
      })
      .then(res => res.json())
      .then(data =>{
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Update!',
            text: 'Information has been successfully updated.',
            icon: 'success',
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/mytoys';
            }
          });
        }
      })
     
    }
  })


}

  return (
    <>
    <Header></Header>
      <div className='md:mx-64 lg:mx-48'>
        <h2 className="text-2xl font-bold mb-4 mt-8 text-center">Update Toy's Information</h2>
        <form onSubmit={handleUpdate} id="toyForm" className="space-y-4">

          <div className="flex flex-col">
            <label htmlFor="pictureUrl" className="text-lg font-semibold mb-1">
            Price:
            </label>
            <input className="border border-gray-300 rounded-md py-2 px-3"
              type="text" id="pictureUrl"
              name="price" defaultValue={singleToy.price} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pictureUrl" className="text-lg font-semibold mb-1">
            Quantity:
            </label>
            <input className="border border-gray-300 rounded-md py-2 px-3"
              type="text" id="pictureUrl"
              name="quantity" defaultValue={singleToy.quantity}/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="pictureUrl" className="text-lg font-semibold mb-1">
            Description:
            </label>
            <input className="border border-gray-300 rounded-md py-2 px-3"
              type="text" id="pictureUrl"
              name="description" defaultValue={singleToy.description}/>
          </div>




          <div className='text-center mb-8'><button
            type="submit"
            className=" mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
          >
            Update Toy Information
          </button>
          
          </div>
        </form>
      </div>
<Footer></Footer>
    </>
  );
};

export default UpdateAtoy;