import React from "react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="upper"></div>
      <div className="lower flex justify-center items-center w-full pb-10">
        <div className="lower_content w-[90%] flex flex-col gap-4">
          <div className="description flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">Welcome to PopX</h2>
            <p className="text-md font-light">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
          </div>
          <div className="buttons w-full flex flex-col gap-3">
            <button
              className="w-full text-sm text-white font-semibold rounded bg-darkpurple p-2.5 cursor-pointer hover:opacity-90"
              onClick={() => {
                Navigate("/create");
              }}
            >
              Create Account
            </button>
            <button
              className="w-full text-sm text-black font-medium rounded bg-lightpurple p-2.5 cursor-pointer"
              onClick={() => {
                Navigate("/signin");
              }}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
