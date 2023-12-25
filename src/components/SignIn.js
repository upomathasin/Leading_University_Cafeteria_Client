import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

export default function SignIn() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    const passPattern =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const email = data.l_email;
    const password = data.l_password;
    console.log(email, password);
    authContext
      .signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        Swal.fire("Login Successful");
        navigate("/menu");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{
        backgroundImage: `url(bg.jpg) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content w-full flex-col lg:flex-col">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
          <form className="card-body " onSubmit={handleSubmit(handleSignIn)}>
            <h4 className="text-3xl text-green-600 text-center font-bold">
              Login Form
            </h4>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="l_email"
                placeholder="email"
                className="input input-bordered"
                {...register("l_email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="l_password"
                placeholder="password"
                className="input input-bordered"
                {...register("l_password")}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-600 text-white">Login</button>
            </div>
          </form>
          <SocialLogin ></SocialLogin>
        </div>
      </div>
    </div>
  );
}
