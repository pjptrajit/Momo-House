import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { logout, user, isAuthenticated, isLoading, error } = useAuth0();
  const nav = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <div className="w-32">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {isAuthenticated ? (
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={
                user?.picture
                  ? user.picture
                  : "https://freesvg.org/img/abstract-user-flat-4.png"
              }
              alt="profile"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-orange-500"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col justify-between flex-1 text-center md:text-left">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {user?.name}
              </h1>
              <p className="text-gray-600 text-lg">
                {user?.email}
              </p>
            </div>

            {/* Logout Button */}
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => {
                  logout();
                  nav("/");
                }}
                className="w-full md:w-fit px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-4">
          <h1 className="text-xl font-semibold text-gray-700">
            You are not logged in
          </h1>
          <button
            onClick={() => nav("/login")}
            className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Login First
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
