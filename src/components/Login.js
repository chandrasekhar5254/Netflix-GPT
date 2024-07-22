import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_LINK } from "../utils/Links";
import { checkValidData } from "./Validate";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/userSlice";
import profileImage from "../assets/Chandrasekhar.jpg";

const Login = () => {
  const [signUpForm, setSignUpForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleChange = () => {
    setSignUpForm(!signUpForm);
  };

  const handlevalidBtn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!signUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profileImage, // Use imported profile image
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(adduser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_LINK})` }}
    >
      <Header />
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-70 p-8 rounded-lg max-w-sm w-full text-white"
        >
          <h1 className="font-bold text-white text-3xl mb-6">
            {signUpForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signUpForm && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                ref={name}
                type="text"
                id="name"
                placeholder="Enter Name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              ref={email}
              type="text"
              id="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              ref={password}
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <p className="text-red-500 font-medium text-xs py-2">{errorMsg}</p>
          </div>
          {signUpForm && (
            <div className="flex items-end justify-end mb-5">
              <a
                className="text-sm text-gray-400 hover:text-gray-200 hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
          )}
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            type="submit"
            onClick={handlevalidBtn}
          >
            {signUpForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center justify-center mt-6">
            <p
              className="text-sm text-gray-400 hover:cursor-pointer"
              onClick={handleChange}
            >
              {signUpForm
                ? "New to Netflix? Sign up now."
                : "Already registered? Sign in Now"}
            </p>
          </div>
          <div className="text-center text-gray-400 text-xs mt-6">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a className="underline" href="#">
                Learn more.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
