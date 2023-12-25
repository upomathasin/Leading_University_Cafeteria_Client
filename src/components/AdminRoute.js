import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UseAdmin from "./hooks/UseAdmin";
export default function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, isAdminLoading] = UseAdmin();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  } else {
    alert("Please Login first !!");
    return <Navigate to="/signin" replace={true}></Navigate>;
  }
}
