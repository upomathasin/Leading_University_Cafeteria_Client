import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { FaShoppingCart } from "react-icons/fa";
import useCart from "./hooks/useCart";
export default function () {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  return (
    <div className="navbar bg-base-300 fixed z-10 opacity-80 text-neutral-content flex justify-between p-3  text-white ">
      <div>
        <a className="btn btn-ghost normal-case text-xl text-white ">
          {"    Leading University Cafeteria".toUpperCase()}
        </a>
      </div>
      <div>
        <Link className="btn btn-ghost normal-case text" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text" to="/menu">
          Our Menu
        </Link>
        <Link className="btn btn-ghost normal-case text" to="/signup">
          Register
        </Link>
        <Link to="/order/pizza" className="btn btn-ghost normal-case text">
          Order
        </Link>
        {user && (
          <Link to="/dashboard/mycart">
            <button className="btn btn-warning text-black text-lg">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge  badge-black text-white">
                <p>{cart ? cart.length : "0"}</p>
              </div>
            </button>
          </Link>
        )}

        {user ? (
          <button
            className="btn btn-ghost  normal-case text-md"
            onClick={logout}
          >
            {" "}
            Log Out
          </button>
        ) : (
          <Link className="btn btn-ghost  normal-case text-md" to="/signin">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
}
