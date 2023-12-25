import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

export default function useMenu() {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");

  const { refetch, data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () =>
      await fetch(`http://localhost:5000/menu`, {
        headers: { authorization: `Bearer ${token}` },
      }).then((res) => res.json()),
  });
  return [menu, refetch];
}
