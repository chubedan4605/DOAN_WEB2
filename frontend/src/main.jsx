import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true, 
        element: <HomePage></HomePage>,
      },
      {
        path: 'user', 
        element: <UserPage></UserPage>,
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
