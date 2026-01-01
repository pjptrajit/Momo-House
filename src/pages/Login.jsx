import React from 'react'
import Header from '../components/Header'
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
   const { loginWithRedirect } = useAuth0();
   console.log(loginWithRedirect);
  return (
    <div>
      <Header />
      <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 p-4 ">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 space-y-6">

          <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email..."
                className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password..."
                className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-lg hover:bg-gray-50 transition"
            onClick={()=>{
              loginWithRedirect();
            }}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-gray-700">Login with Google</span>
          </button>

        </div>
      </div>
    </div>

  )
}

export default Login