import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthProvider, { AuthContext } from "../providers/AuthProvider";
export default function SocialLogin() {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        let savedUserInfo = {
          name: user.displayName,

          email: user.email,
        };
        console.log(savedUserInfo);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUserInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-3">
        <button
          className="btn btn-circle btn-outline"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
}
