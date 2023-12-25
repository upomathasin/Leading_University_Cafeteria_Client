import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const authContext = useContext(AuthContext);
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  /*RegEx for input validation */
  const namePattern = /^[a-zA-z .]+$/;
  const phnPattern = /^(\+88)?-?01[3-9]\d{8}$/;
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);

    const name = data.r_name;
    const phone = data.r_phone;
    const email = data.r_email;
    const password = data.r_password;
    const photo = data.r_photoUrl;
    console.log(name, phone, email);
    // const name = event.target.r_name.value;
    // const phone = event.target.r_phone.value;
    // const email = event.target.r_email.value;
    // const password = event.target.r_password.value;

    authContext
      .createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.email;

        navigate("/signin");
        updateUserProfile(name, photo).then(() => {
          let savedUserInfo = {
            name: data.r_name,

            email: data.r_email,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUserInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Lu Cafeteria/Registration</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-100 "
        style={{
          backgroundImage: `url(bg2.jpg) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content w-full flex-col lg:flex-col">
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
            <form className="card-body " onSubmit={handleSubmit(handleSignUp)}>
              <h4 className="text-3xl text-green-600 text-center font-bold">
                Registration Form
              </h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="r_name"
                  {...register("r_name", {
                    required: true,
                    pattern: namePattern,
                  })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.r_name && (
                  <span className=" text-red-700">
                    Only Alphabets are Allowed{" "}
                  </span>
                )}

                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  name="r_phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  {...register(
                    "r_phone",
                    { required: true },
                    { pattern: phnPattern }
                  )}
                />
                {errors.r_phone && (
                  <span className=" text-red-700">
                    Enter a valid bangladeshi phone number !
                  </span>
                )}

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="r_email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("r_email", {
                    required: true,
                    pattern: emailPattern,
                  })}
                />
                {errors.r_email && (
                  <span className=" text-red-700">
                    Enter a valid email address !
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="r_password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("r_password", {
                    pattern: passPattern,
                    required: true,
                  })}
                />
                {errors.r_password && (
                  <span className=" text-red-700">
                    "Password must contain at least one spacial char,one upper ,
                    lower case letter and at least one digit. (At least 8)"
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="r_photoUrl"
                  {...register("r_photoUrl", {})}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.r_photoUrl && <span className=" text-red-700"></span>}
              </div>

              <div className="form-control mt-5">
                <button className="btn bg-green-600 text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
