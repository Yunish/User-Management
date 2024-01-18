import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import Login from "../../core/public/Login";

// eslint-disable-next-line react-refresh/only-export-components
export enum ROUTE_TYPE {
  PUBLIC = "public",
  PRIVATE = "private",
}

interface IProtectedRoute {
  children: React.ReactNode;
  type?: ROUTE_TYPE;
}

function ProtectedRoute({
  children,
  type = ROUTE_TYPE.PRIVATE,
}: IProtectedRoute) {
  console.log(type, "type");
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    console.log("not auth");
    return <Login />;
  } else {
    console.log("authenticated");
    if (type === ROUTE_TYPE.PUBLIC) {
      console.log("authenticated public");
      return <Navigate to="/" replace />;
    } else {
      console.log("authenticated private");
      return children;
    }
  }
}

export default ProtectedRoute;
