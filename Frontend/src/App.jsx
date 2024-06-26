import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Myparcels from "./pages/Myparcels";
import Parcel from "./pages/Parcel";
import Parcels from "./pages/Parcels";

function App() {
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
      element: <Myparcels />,
    },

    {
      path: "/parcel/:id",
      element: <Parcel />,
    },
    {
      path: "/allparcels",
      element: <Parcels />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
