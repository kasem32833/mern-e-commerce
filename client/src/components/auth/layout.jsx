import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12 ">
        <div className="max-md space-y-6 text-center text-primary">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">welcome to e-commerce-website</h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
