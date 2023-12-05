import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "../pages/Profile";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Profile />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
