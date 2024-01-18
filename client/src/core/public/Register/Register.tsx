import { Link } from "react-router-dom";
import publicPath from "../../../services/routes/routes.path.public";
import Input from "../../../components/Form/Input/Input";

function Register() {
  return (
    <>
      <div className="">
        <h3 className="text-3xl">Register</h3>
        <span className="">
          <span className="text-gray-700 text-sm font-bold">
            Already have an account?
          </span>
          <Link
            className="text-xs font-semibold text-indigo-700 ml-2"
            to={publicPath.login}
          >
            Login
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="pt-3 col-span-4">
          <Input
            name="firstName"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="First Name"
          />
        </div>
        <div className="pt-3 col-span-4">
          <Input
            name="middleName"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Middle Name"
          />
        </div>
        <div className="pt-3 col-span-4">
          <Input
            name="lastName"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Last Name"
          />
        </div>
        <div className="pt-3 col-span-6">
          <Input
            name="dateOfBirth"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Date Of Birth"
          />
        </div>
        <div className="pt-3 col-span-6">
          <Input
            name="contactNumber"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Contact Number"
          />
        </div>
        <div className="pt-3 col-span-6">
          <Input
            name="address"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Address"
          />
        </div>
        <div className="pt-3 col-span-6">
          <Input
            name="username"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Username"
          />
        </div>
        <div className="pt-3 col-span-12">
          <Input
            name="email"
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
            label="Email"
          />
        </div>

        <div className="pt-3  col-span-12 w-full">
          <button
            className="btn bg-primary text-white w-full rounded-md p-1"
            onClick={() => {}}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
