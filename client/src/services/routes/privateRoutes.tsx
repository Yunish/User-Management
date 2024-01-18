import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../core/private/Dashboard";
import ErrorPage from "../../components/ErrorPage";
import UserManagement from "../../core/private/UserManagement";
import Root from "../../core/private/Root";
import privatePath from "./routes.path.private";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: privatePath.dashboard,
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: privatePath.userMgmt,
        element: <UserManagement />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default privateRouter;
