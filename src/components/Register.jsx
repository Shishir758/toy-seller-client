import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProviders';
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess('')
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    const photoUrl = event.target.profilePhoto.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: username, photoURL: photoUrl
        }).then(() => {

        }).catch((error) => {

        });
        setError('');
        event.target.reset();
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      <Header />
      <div className="w-full max-w-xs mx-auto">
        <p className="text-center font-bold text-gray-500 text-2xl mt-5">
          Please Register
        </p>
        <p className="text-center font-bold text-green-500 text-2xl mt-3">
          {success}
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username" name="username" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" placeholder="Email Address" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" required />
            <p className="text-red-500 text-sm italic">{error}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePhoto">
              Profile Picture URL
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profilePhoto" type="text" placeholder="Profile Picture URL" name="profilePhoto" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button>
            <Link
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"' to='/login'>Have an account? Loing</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;