import { createBrowserRouter } from "react-router-dom";
import Login from "../../core/public/Login";
import ErrorPage from "../../components/ErrorPage";
import Register from "../../core/public/Register";
import ForgotPassword from "../../core/public/ForgotPassword";
import Root from "../../core/public/Root";
import publicPath from "./routes.path.public";

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: publicPath.login,
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: publicPath.register,
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: publicPath.forgotPassword,
        element: <ForgotPassword />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default publicRouter;
