import React from "react";

const Login = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center ">

      <div className="h-[65vh] w-[30vw] py-4 px-3 md:px-5 border-black rounded-[15px] border-2">
        <h1 className="mx-3 font-bold">Login</h1>
        <input
          type="email"
          placeholder="Enter email here"
          className="my-4 input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Enter password here"
          className="my-4 input input-bordered w-full max-w-xs"
        />
        <button class="btn btn-success mx-5 block mx-auto">Success</button>
      </div>
    </div>
  );
};

export default Login;
