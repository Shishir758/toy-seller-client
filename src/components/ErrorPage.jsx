import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import PageNotFound from '../assest/404.gif';

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       <img src={PageNotFound}></img>
        <div className='max-w-md text-center'>
        <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-300 text-gray-900'
          >
            Back to homepage
          </Link>
         
          <p className='text-2xl font-semibold md:text-3xl mt-2 mb-8'>
            {error?.message}
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
