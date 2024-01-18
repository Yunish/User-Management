import { Navigate, Outlet, useLocation } from "react-router-dom";
import Image from "../../../components/Image/Image";

function Root() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex items-center h-screen w-screen px-40 bg-blue-400">
      <div className="mx-auto bg-gray rounded-md max-w-sm w-full lg:max-w-full lg:flex bg-gray-300 ">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-7">
            <div className="flex h-full">
              <div className="h-full bg-gray-200 bg-cover rounded-t lg:rounded-t lg:rounded-l content-center flex justify-center items-center">
                <Image />
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex flex-col py-8 w-full px-3 bg-gray-300 rounded-b lg:rounded-b-none lg:rounded-r">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
