import React from "react";
import profile from "../assets/women.png";
import camera from "../assets/camera.png";
const AccountSettings = () => {
  return (
    <div className="settings_section h-screen flex flex-col  justify-between ">
      <div className="header flex flex-col items-center border-b-disable border-dashed border-b-2">
        <div className="header_section p-4 text-left w-full bg-white">
          Account Settings
        </div>
        <div className="profile_section bg-backg flex flex-col gap-4 p-4 ">
          <div className="persona w-[90%] flex justify-center gap-3 items-center ">
            <div className="profile_iamge relative">
              <img
                src={profile}
                alt=""
                className="w-24 bg-lightpurple rounded-full "
              />
              <div className="camera w-5 absolute top-10 -right-1 bg-darkpurple p-1 rounded-full">
                <img src={camera} alt="" className=" " />
              </div>
            </div>
            <div className="name_email flex flex-col">
              <div className="name text-sm font-semibold">Marry Doe</div>
              <div className="email text-sm">Marry@gmail.com</div>
            </div>
          </div>
          <div className="profile_description text-xs w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptate placeat autem voluptatem nam pariatur nihil magnam
            expedita.
          </div>
        </div>
      </div>
      <div className="footer border-t-disable border-dashed border-t-2 w-full p-4"></div>
    </div>
  );
};

export default AccountSettings;
