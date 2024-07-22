import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex items-center justify-center">
          <div>
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-14 h-14 mx-4 rounded-full"
            />
            <h2 className="text-cyan-50 text-center">{user?.displayName}</h2>
          </div>

          <div className="border border-red-700 rounded-lg bg-red-600 px-4 py-1 hover:bg-red-700 hover:cursor-pointer ">
            <button
              onClick={handleSignOut}
              className="text-cyan-100 font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
