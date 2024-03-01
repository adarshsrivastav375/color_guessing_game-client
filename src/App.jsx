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

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";


function App() {

  const currentUser = true;
  const ProtectedRout = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
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
          path: 'profile',
          element: <ProtectedRout>
            <Profile currentUser={currentUser} />
          </ProtectedRout>
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
