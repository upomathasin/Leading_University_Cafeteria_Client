import React from "react";
import DashBoardPage from "../components/DashBoardPage";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarCheck,
  FaHome,
  FaUser,
  FaUsers,
  FaBook,
  FaUtensilSpoon,
  FaUtensils,
} from "react-icons/fa";
import UseAdmin from "../components/hooks/UseAdmin";
export default function Dashboard() {
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();
  return (
    <div className="drawer lg:drawer-open p-4">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#D1A054]  p-5 w-80 min-h-full  text-white font-bold">
          {/* Sidebar content here */}
          {isAdmin ? (
            <div>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaWallet></FaWallet>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers> All users
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaCalendarCheck></FaCalendarCheck> Calender
                </NavLink>
              </li>
            </div>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaCalendarCheck></FaCalendarCheck> Calender
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
