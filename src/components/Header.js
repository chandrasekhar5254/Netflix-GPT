import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../redux/userSlice";
import { LOGO } from "../utils/Links";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribed();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

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
