import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "firebase/auth";
import Navbar from "./Navbar";
import Footer from "../../Footer";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in successfully with Google");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="Login flex  justify-center min-h-screen p-4">
          <div className="text-center max-w-sm w-full">
            <h1 className="text-2xl m-4 font-bold">Sign In</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="ml-5 mb-0 block">
                <label
                  htmlFor="email"
                  className="block text-ss mb-2 text-left text-gray"
                >
                  email address:
                </label>
              </div>
              <div className="inputContainer m-auto block">
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 m-5  mb-8 mt-0 border border-black rounded-md focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="ml-5 mb-0 block">
                <label
                  htmlFor="password"
                  className="block text-ss mb-2 text-left text-gray"
                >
                  password:
                </label>
              </div>
              <div className="inputContainer m-auto block">
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 m-5 mb-8 mt-0 border border-black rounded-md focus:outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink text-black p-2 rounded-md hover:bg-pink-dark m-5 drop-shadow-md"
              >
                Continue shopping
              </button>
            </form>
            <div className="flex  justify-center w-full m-5">
              <div className="flex-grow h-px bg-gray"></div>
              <span className="px-4 text-sm text-gray">OR</span>
              <div className="flex-grow h-px bg-gray"></div>
            </div>
            <button
              type="button"
              className="w-full p-2 border border-black rounded-md hover:bg-pink m-5 mb-8 "
              onClick={handleGoogleLogin}
            >
              <i className="fab fa-google mr-2"></i>Continue with Google
            </button>{" "}
            <button
              type="button"
              className="w-full p-2 border border-black rounded-md hover:bg-pink m-5  "
            >
              <i className="fab fa-apple mr-2"></i>Continue with Apple
            </button>
          </div>{" "}
        </div>
      </main>

      <Footer />
    </div>
  );
}
