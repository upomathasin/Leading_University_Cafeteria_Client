import React, { useState } from "react";
import { createContext, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AuthContext = createContext(null);
const googleProveder = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProveder);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      setLoding(false);
      if (user) {
        axios
          .post("http://localhost:5000/jwt", { email: user.email })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access_token", data.data.token);
          });
      } else {
        localStorage.removeItem("access_token");
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const logout = () => {
    Swal.fire("Logout Successful!");

    return signOut(auth);
  };

  const userInfo = {
    user,
    createUser,
    signInUser,
    logout,
    loading,
    updateUserProfile,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
