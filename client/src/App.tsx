import { RouterProvider } from "react-router-dom";

import { useAuth } from "./providers/AuthProvider";
import privateRouter from "./services/routes/privateRoutes";
import publicRouter from "./services/routes/publicRoutes";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <RouterProvider router={isAuthenticated ? privateRouter : publicRouter} />
  );
}

export default App;
