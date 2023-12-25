import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

export default function UseAdmin() {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");

  const {
    isLoading: isAdminLoading,
    error,
    data: isAdmin,
  } = useQuery(["isAdmin", user?.email], () =>
    fetch(`http://localhost:5000/users/admin/${user.email}`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => data.admin)
  );

  return [isAdmin, isAdminLoading];
}
