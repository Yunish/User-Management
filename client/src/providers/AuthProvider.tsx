import React, { FC, useContext, useMemo } from "react";

interface AuthProps {
  isAuthenticated: boolean;
  token: string;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = React.createContext<AuthProps>({
  isAuthenticated: false,
  token: "",
  setIsAuthenticated: () => {},
  setToken: () => {},
});

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true);
  const [token, setToken] = React.useState<string>("");

  const providerValue = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      token,
      setToken,
    }),
    [isAuthenticated, token]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
