import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();
  return (
    <div className="lower flex justify-center items-center w-full pt-10">
      <div className="lower_content w-[90%] flex flex-col gap-6">
        <div className="description flex flex-col gap-3">
          <h2 className="font-semibold text-2xl">
            Signin to your <br />
            PopX account
          </h2>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
          </p>
        </div>
        <div className="input_section w-full flex flex-col gap-3">
          <div className="input w-full relative mb-1">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Email Address
            </div>
          </div>
          <div className="input w-full relative">
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Password
            </div>
          </div>

          <button
            className={`w-full text-sm text-white font-medium rounded p-2.5 cursor-pointer ${
              email ? (password ? "bg-darkpurple" : "bg-disable") : "bg-disable"
            }`}
            onClick={() => {
              Navigate("/settings");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
