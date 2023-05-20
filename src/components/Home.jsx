import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assest/bannner.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer } from 'react-bootstrap';
import useTitle from '../useTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthContext } from './provider/AuthProviders';
import Swal from 'sweetalert2';
import { Toast } from 'bootstrap';


const Home = () => {
  const { user } = useContext(AuthContext);
  const [detailsData, setDetailsData] = useState([])
  // const history = useHistory();

  useEffect(() => {
    fetch('https://toy-serer-side.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setDetailsData(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

   useTitle('Home')

const [selectedTab, setSelectedTab] = useState(0);

const handleTabSelect = (index) => {
  setSelectedTab(index);
};

const handleViewToy = () => {
  if(!user){
    Swal.fire({
      title: 'Want to view Details?',
      text: 'You have login first to view details.',
      icon: 'info',
      confirmButtonText: 'Close',
    });
  }
  
};


return (
  <>
    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 mx-5 items-center'>
      <div>
        <div className="col-md-6 ">
          <div className="w-100">
            <img className="w-100 rounded-md mt-5"
              src={bannerImage} alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1 className='lg:text-8xl md:text-4xl text-3xl my-4 text-center'>Findus Toys</h1>
        <p className='text-justify'>Toy Cars offers a thrilling collection of miniature vehicles that captivate the imaginations of children. From sleek sports cars to rugged trucks and everyday cars, as well as mini fire trucks and police cars, this range of toys provides endless fun and excitement. Each toy car is designed with attention to detail, replicating the appearance of their real-life counterparts. Kids can engage in imaginative play as they zoom their sports cars on imaginary racetracks, navigate rough terrains with their trucks, or embark on exciting rescue missions with the mini fire trucks and police cars. Toy Cars not only entertain children but also help develop their fine motor skills, hand-eye coordination, and storytelling abilities. With Toy Cars, kids can explore different roles, create thrilling adventures, and experience the thrill of driving their own fleet of vehicles.</p>
        <div className='text-center md:text-start lg:text-start'>
        </div>
      </div>
    </div>

    <div className=' mx-auto lg:w-3/4'>
      <h1 className='text-center font-bold text-2xl mt-10'>Toy's Photo Gallery</h1>

    </div>
    <div className="mx-5 grid lg:grid-cols-4 gap-4" data-aos='fade-right'>
      {detailsData.slice(6, 10).map((dData) => (
        <div key={dData._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full hover:scale-90 transform transition-all duration-300">
          <img src={dData.pictureUrl} alt="Truck" className="w-full mb-4 h-96" />
          <div className="flex-grow"></div>
        </div>
      ))}
    </div>


    <div className=' mx-auto lg:w-3/4'>
      <h1 className='text-center font-bold text-2xl mt-10'>Available Car Toys</h1>
      <h1 className='text-center text-2xl mt-2'>Choose the best baby car toys for your little ones.</h1>
    </div>

    <div className="mx-5 grid lg:grid-cols-3 gap-4 h-full" data-aos='fade-up'>
      {detailsData.slice(0, 6).map((dData) => (
        <div key={dData._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
          <img src={dData.pictureUrl} alt="Truck" className="w-full mb-4 h-96" />
          <h3 className="text-lg font-semibold mb-2">{dData.name}</h3>
          <p className="text-gray-600">{dData.description}</p>
          <div className="flex-grow"></div>
          <div className="mt-auto">
            <Link to={`/ViewToy/${dData._id}`}>
              <button onClick= { handleViewToy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                View Toy
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>


    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <div className='mx-auto'>
          <TabList className="flex mb-4 mx-4 justify-between md:justify-center md:mt-8">

            <Tab className="mr-2 p-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer">Regular Toy Car</Tab>
            <Tab className="mr-2 p-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer">Police Toy Car</Tab>
            <Tab className="mr-2 p-2 px-4  bg-blue-500 text-white rounded-lg cursor-pointer">Toy Truck</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2 className='text-center font-bold'>Sub-categories for Regular Toy Car</h2>
          <div className="lg:mx-32 grid lg:grid-cols-2 gap-4 h-full">
            {detailsData.slice(0, 2).map((dData) => (
              <div key={dData._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <img src={dData.pictureUrl} alt="Truck" className="w-full mb-4 h-96" />
                <div className=" pt-4 pb-2 justify-between align-middle">
                  <span className="font-bold text-xl mb-2 mr-4">{dData.name}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: USD$ {dData.price}</span>
                  
                  <span style={{ display: 'flex', alignItems: 'center' }}>
          <Rating style={{ maxWidth: 100 }}value={dData?.rating}readOnly/>
          <span style={{ marginLeft: 4 }}>{dData?.rating}</span>
          </span>
                  
                </div>

                <div className="flex-grow"></div>
                <div className="mt-auto">
                  <Link to={`/ViewToy/${dData._id}`}>
                    <button  onClick= { handleViewToy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                      View Toy
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className='text-center font-bold'>Sub-categories for Police Toy Car</h2>
          <div className="lg:mx-32 grid lg:grid-cols-2 gap-4 h-full">
            {detailsData.slice(2, 4).map((dData) => (
              <div key={dData._id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <img src={dData.pictureUrl} alt="Truck" className="w-full mb-4 h-96" />
                <div className=" pt-4 pb-2 justify-between align-middle">
                  <span className="font-bold text-xl mb-2 mr-4">{dData.name}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: USD$ {dData.price}</span>
                  
                  <span style={{ display: 'flex', alignItems: 'center' }}>
          <Rating style={{ maxWidth: 100 }}value={dData?.rating}readOnly/>
          <span style={{ marginLeft: 4 }}>{dData?.rating}</span>
          </span>
        </div>
        
    <div className="mt-auto">
    <Link to={`/ViewToy/${dData._id}`}>
    <button  onClick= { handleViewToy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
    View Toy</button></Link>
    </div>
  </div>))}

        </div>
        </TabPanel>
        <TabPanel>
          <h2 className='text-center font-bold'>Sub-categories for Toy Truck</h2>
          <div className="lg:mx-32 grid lg:grid-cols-2 gap-4 h-full">
            {detailsData.slice(4, 6).map((dData) => (
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <img src={dData.pictureUrl} alt="Truck" className="w-full mb-4 h-96" />
                <div className=" pt-4 pb-2 justify-between align-middle">
                  <span className="font-bold text-xl mb-2 mr-4">{dData.name}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: USD$ {dData.price}</span>
                  
                  <span style={{ display: 'flex', alignItems: 'center' }}>
          <Rating style={{ maxWidth: 100 }}value={dData?.rating}readOnly/>
          <span style={{ marginLeft: 4 }}>{dData?.rating}</span>
          </span>
                  
                </div>
                <div className="flex-grow"></div>
                <div className="mt-auto">
                  <Link to={`/ViewToy/${dData._id}`}>
                    <button  onClick= { handleViewToy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                      View Toy
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>

    <div className=' mx-auto lg:w-3/4'>
      <h1 className='text-center font-bold text-2xl mt-10'>Order Form</h1>
      <h1 className='text-center text-2xl mt-2 mb-4'>Please order by filling this form.</h1>
    </div>

    <form className="lg: max-w-6xl lg:mx-auto mx-4">
      <div className='grid lg:grid-cols-2 gap-4'>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=""

            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=''
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <textarea
            id="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=''
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Order
      </button>
    </form>
    <ToastContainer/>
  </>
);
};

export default Home;