import React from "react";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
  const Navigate = useNavigate();
  return (
    <div className="create_account_section h-screen flex flex-col justify-between items-center p-2 gap-6">
      <div className="upper_part flex flex-col w-full justify-between items-center gap-6">
        <h2 className="font-semibold text-2xl pt-6 w-[90%]">
          Signin to your <br />
          PopX account
        </h2>
        <div className="input_section w-[90%] flex flex-col gap-4 ">
          <div className="input w-full relative mb-1">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Full Name <span className="text-red">*</span>
            </div>
          </div>
          <div className="input w-full relative mb-1">
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Phone Number<span className="text-red">*</span>
            </div>
          </div>
          <div className="input w-full relative mb-1">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Email Address<span className="text-red">*</span>
            </div>
          </div>
          <div className="input w-full relative mb-1">
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Password<span className="text-red">*</span>
            </div>
          </div>
          <div className="input w-full relative mb-1">
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full p-2.5 rounded bg-backg border-disable border text-xs px-4"
            />
            <div className="label absolute -top-2 left-2 text-xs bg-backg px-2 text-darkpurple">
              Company Name
            </div>
          </div>
          <div className="input w-full relative mb-1">
            <div className="label text-xs bg-backg pr-2">
              Are you an Agency?<span className="text-red">*</span>
            </div>
            <div className="input flex gap-1 items-center">
              <input
                type="radio"
                id="yes"
                value="yes"
                name="YN"
                className="accent-darkpurple"
              />
              <label className="text-sm px-2">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                value="no"
                name="YN"
                className="accent-darkpurple"
              />
              <label className="text-sm px-2">No</label>
              <br />
            </div>
          </div>
        </div>
      </div>
      <button
        className={`w-[90%] text-sm text-white font-medium rounded p-2.5 mb-4 cursor-pointer bg-darkpurple`}
        onClick={() => {
          Navigate("/settings");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default CreateAccount;
