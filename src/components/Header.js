import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../redux/userSlice";
import { LOGO, SUPPORTED_LANGAGES } from "../utils/Links";
import { setToggleSearch } from "../redux/gptSlice";
import { setChangeLanguage } from "../redux/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const toggleSearch = useSelector((store) => store?.gpt?.toggleSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGpt = () => {
    dispatch(setToggleSearch());
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
  const handleLanguage = (e) => {
    dispatch(setChangeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center justify-center gap-x-4">
          {toggleSearch && (
            <div className=" px-1 ">
              <select
                className="px-4 py-1 rounded-sm bg-gray-700 bg-opacity-50 text-white border border-gray-500 border-3"
                onChange={handleLanguage}
              >
                {SUPPORTED_LANGAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="rounded-sm bg-violet-500 px-4 py-1 hover:bg-violet-700 hover:cursor-pointer ">
            <button className="text-cyan-50 text-center" onClick={handleGpt}>
              {toggleSearch ? "Home" : "GPT Search"}
            </button>
          </div>
          <div className="rounded-sm bg-red-600 px-4 py-1 hover:bg-red-700 hover:cursor-pointer ">
            <button
              onClick={handleSignOut}
              className="text-cyan-100 font-medium"
            >
              Sign Out
            </button>
          </div>
          <div>
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-14 h-14 mx-4 rounded-full "
            />
            <h2 className="text-cyan-50 text-center">{user?.displayName}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
