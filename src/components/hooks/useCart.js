import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function useCart() {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () =>
      await fetch(`http://localhost:5000/carts?email=${user.email}`, {
        headers: { authorization: `Bearer ${token}` },
      }).then((res) => res.json()),
  });
  return [cart, refetch];
}
