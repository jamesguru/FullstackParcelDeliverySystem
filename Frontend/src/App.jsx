import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Myparcels from "./pages/Myparcels";
import Parcel from "./pages/Parcel";
import Parcels from "./pages/Parcels";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector((state) => state.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/myparcels",
      element: user.currentUser ? <Myparcels /> : <Navigate to="/login" />,
    },

    {
      path: "/parcel/:id",
      element: user.currentUser ? <Parcel /> : <Navigate to="/login" />,
    },
    {
      path: "/allparcels",
      element:user.currentUser ? <Parcels /> : <Navigate to="/login" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
