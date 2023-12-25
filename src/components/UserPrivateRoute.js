import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function UserPrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  } else {
    alert("Please Login first !!");
    return <Navigate to="/signin" replace={true}></Navigate>;
  }
}
