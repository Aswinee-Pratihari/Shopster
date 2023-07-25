import React, { useState } from 'react';
import TabName from '../components/TabName';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase.config';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      const user=userCredential?.user
      navigate("/")
      // console.log(user)
      toast.success("welcome user")

    } catch (error) {
      // console.log(error.message)
      toast.error("invalid credentials")
    }
    // handle your login logic here
  };

  const handleGuestLogin=async(e)=>{
    e.preventDefault();
    try {
      const userCredential=await signInWithEmailAndPassword(auth,"test@gmail.com","111111")
      const user=userCredential?.user
      navigate("/")
      // console.log(user)
      toast.success("welcome user")

    } catch (error) {
      // console.log(error.message)
      toast.error("invalid credentials")
    }
  }

  return (
    <TabName title="Login">

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-blue-900 rounded-lg  shadow-md p-7">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 "
            >
              Sign in
            </button>

            <button
             onClick={handleGuestLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 "
            >
              Sign in as a guest
            </button>
          </div>
        </form>
      <h2 className="mt-6 text-center text-lg font-semibold text-white">
            Dont Have an Account <span className='text-red-400 border-b-2 border-red-600 hover:cursor-pointer'><Link to="/register">Register</Link></span>
          </h2>
      </div>
    </div>
    </TabName>
  );
};

export default Login;
