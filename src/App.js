import Home from "./components/Home";
import Main from "./layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import "./App.css";
import AddFood from "./components/AddFood";
import AuthProvider from "./providers/AuthProvider";
import Order from "./Order";
import UserPrivateRoute from "./components/UserPrivateRoute";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Users from "./components/Users";
import Menu from "./components/Menu";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Dashboard from "./layout/Dashboard";
import MyCart from "./components/MyCart";
import AllUser from "./components/AllUser";
import AdminRoute from "./components/AdminRoute";
import AddItem from "./components/AddItem";
import ManageItems from "./components/ManageItems";

const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        { path: "/menu", element: <Menu></Menu> },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
        {
          path: "/user",
          element: <Users></Users>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>,
        },
        {
          path: `/user/:id`,
          element: <div>welcome user !</div>,
        },
        {
          path: "/addFood",
          element: <AddFood></AddFood>,
        },
        {
          path: "/order/:category",
          element: (
            <UserPrivateRoute>
              <Order></Order>
            </UserPrivateRoute>
          ),
        },
      ],
    },

    {
      path: "dashboard",
      element: (
        <UserPrivateRoute>
          <Dashboard></Dashboard>,
        </UserPrivateRoute>
      ),
      children: [
        {
          path: "mycart",
          element: <MyCart></MyCart>,
        },
        {
          path: "allUsers",
          element: <AllUser></AllUser>,
        },
        {
          path: "addItems",
          element: <AddItem></AddItem>,
        },
        {
          path: "manageItems",
          element: (
            <AdminRoute>
              <ManageItems></ManageItems>
            </AdminRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
