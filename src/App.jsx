/* eslint-disable react/prop-types */
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Contest from "./pages/Contest";
import Parity from "./components/Parity";
import Bcon from "./components/Bcon";
import Sapre from "./components/Sapre";
import Emred from "./components/Emred";
import Recharge from "./pages/profile/Recharge";
import Withdraw from "./pages/profile/Withdraw";
import BankDetails from "./pages/profile/BankDetails";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { httpAuth } from ".";
import { login, logout } from "./redux/authSlice";
import UpdatePassword from "./pages/profile/UpdatePassword";
import Transactions from "./pages/profile/Transactions";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";


function App() {
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    try {
      const response = await httpAuth.get("/api/v1/users/current-user");
      const userData = response.data.data;
      if (userData) {
        dispatch(login(userData));

      } else {
        dispatch(logout())
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, [])

  const currentUser = true;
  const ProtectedRout = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/' />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout currentUser={currentUser} />,
      children: [
        {
          path: "/",
          element: <Home currentUser={currentUser} />
        },

        {
          path: '/profile',
          element: <ProtectedRout>
            <Profile currentUser={currentUser} />
          </ProtectedRout>,
          children: [
            {
              path: "/profile/recharge",
              element: <Recharge />
            },
            {
              path: "/profile/withdraw",
              element: <Withdraw />
            },
            {
              path: "/profile/update-bank-details",
              element: <BankDetails />
            },
            {
              path: "/profile/change-password",
              element: <UpdatePassword />
            },
            {
              path: "/profile",
              element: <Transactions />
            },

          ]

        },
        {
          path: "/contest",
          element: <ProtectedRout>
            <Contest currentUser={currentUser} />
          </ProtectedRout>,
          children: [
            {
              path: "/contest",
              element: <Parity currentUser={currentUser} />
            },
            {
              path: "/contest/bcone",
              element: <Bcon currentUser={currentUser} />
            },
            {
              path: "/contest/sapre",
              element: <Sapre currentUser={currentUser} />
            },
            {
              path: "/contest/emred",
              element: <Emred currentUser={currentUser} />
            },
          ]
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
