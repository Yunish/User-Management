import { Link } from "react-router-dom";
import publicPath from "../../../services/routes/routes.path.public";
import Input from "../../../components/Form/Input/Input";

function ForgotPassword() {
  return (
    <>
      <div className="my-4">
        <h3 className="text-3xl">Forgot Password</h3>
        <span className="">
          <span className="text-gray-700 text-sm font-bold">Go back to</span>
          <Link
            className="text-xs font-semibold text-indigo-700 ml-1"
            to={publicPath.login}
          >
            Login
          </Link>
        </span>
      </div>
      <div className="flex flex-col">
        <div className="pt-3">
          <Input
            name="email"
            value={"username"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Username"
          />
        </div>
        <div className="pt-3 w-full">
          <button
            className="btn bg-primary text-white w-full rounded-md p-1"
            onClick={() => {}}
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
