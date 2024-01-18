import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Form/Input/Input";
import { useAuth } from "../../../providers/AuthProvider";
import privatePath from "../../../services/routes/routes.path.private";
import publicPath from "../../../services/routes/routes.path.public";

function Login() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className="my-4">
        <h3 className="text-3xl">Login</h3>
        <span className="">
          <span className="text-gray-700 text-sm font-bold">
            Does not have an account yet?
          </span>
          <Link
            className="text-xs font-semibold text-indigo-700 ml-2"
            to={publicPath.register}
          >
            Sign Up
          </Link>
        </span>
      </div>
      <div className="flex flex-col">
        <div className="pt-3">
          <Input
            name="username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
            label="Username"
          />
        </div>
        <div className="pt-3">
          <Input
            name="password"
            value={password}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            label="Password"
            childComponent={
              <Link
                className="text-xs font-semibold text-indigo-700"
                to={publicPath.forgotPassword}
              >
                Forgot Password?
              </Link>
            }
          />
        </div>
        <div className="pt-3 w-full">
          <button
            className="btn bg-primary text-white w-full rounded-md p-1"
            onClick={() => {
              setIsAuthenticated(!isAuthenticated);
              navigate(privatePath.dashboard);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
