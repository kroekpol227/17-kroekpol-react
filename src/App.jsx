import { useState } from "react";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.jsx";
import Owner from "./views/Owner.jsx";
import UserHomeView from "./components/UserHomeView.jsx";
import AdminHomeView from "./components/AdminHomeView.jsx";
import User from "./views/User.jsx";
import Admin from "./views/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center bg-zinc-200">
        <h1 className="text-4xl">404 Page Not Found</h1>
      </div>
    ),

    children: [
      { path: "/", element: <Home /> },
      { path: "owner", element: <Owner /> },
      { path: "user", element: <User /> },
      { path: "admin", element: <Admin /> },
    ],
  },
]);

export default function App() {
  const [view, setView] = useState("");

  return (
    <div >
      <div >
        <RouterProvider router={router} />

        <UserHomeView
          onClick={() => {
            setView("userhomeview");
          }}
        >
          User Home View
        </UserHomeView>

        <AdminHomeView
          onClick={() => {
            setView("adminhomeview");
          }}
        >
          Admin Home View
        </AdminHomeView>
      </div>

      {view === "userhomeview" && <UserHomeView />}

      {view === "adminhomeview" && <AdminHomeView />}
    </div>
  );
}
