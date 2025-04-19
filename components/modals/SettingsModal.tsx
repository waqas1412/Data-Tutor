import SmallButtons from "@/components/ui/buttons/SmallButtons";
import InputFieldSecond from "@/components/ui/InputFieldSecond";
// import ToggleButton from "@/components/ui/ToggleButton"; // Commented out - unused
import {
  // accentColorItems,
  // responseStyle,
  settingsTabItems,
  themeSettingsData,
} from "@/constants/data";
import { useTheme } from "next-themes";
import React, { useState } from "react";
// import SelectDropdown from "../ui/SelectDropdown";

function SettingsModal() {
  const [activeMenu, setActiveMenu] = useState(0);
  const { setTheme } = useTheme();
  return (
    <div className=" dark:text-n30">
      <div className="p-2 border border-primaryColor/30 bg-primaryColor/5 rounded-xl min-[1400px]:rounded-full flex flex-row justify-centert items-center flex-wrap gap-2 w-full mt-6">
        {settingsTabItems.map(({ id, name, icon }, idx) => (
          <div
            key={id}
            className={`flex justify-start items-center gap-2 xl:gap-2 py-2 pl-2 pr-6  border  rounded-full cursor-pointer ${
              activeMenu === idx
                ? " border-primaryColor bg-primaryColor"
                : "border-primaryColor/30 bg-white dark:bg-n0"
            }`}
            onClick={() => setActiveMenu(idx)}
          >
            <div
              className={`flex justify-center items-center border  rounded-full p-1.5 xl:p-2  ${
                activeMenu === idx
                  ? " border-primaryColor bg-white"
                  : "border-primaryColor/30 bg-primaryColor/5"
              }`}
            >
              {React.createElement(icon, {
                className: `text-primaryColor text-base xl:text-xl`,
              })}
            </div>
            <p
              className={`text-sm font-medium text-nowrap pr-4 ${
                activeMenu === idx ? "text-white" : ""
              }`}
            >
              {name}
            </p>
          </div>
        ))}
      </div>

      {activeMenu === 0 && (
        <div className="mt-6 bg-primaryColor/5 border border-primaryColor/30 rounded-xl p-5">
          <div className="pb-5 border-b border-primaryColor/30">
            <p className="text-n700 font-medium dark:text-n30">Settings</p>
            <p className="pt-2 text-xs">
              Configure your chat and AI interaction preferences
            </p>
          </div>
          
          <div className="pt-5">
            {/* Chat Management Section */}
            <div className="mb-6">
              <p className="text-n700 font-medium dark:text-n30 text-sm mb-2">Chat Management</p>
              <div className="border border-primaryColor/30 rounded-xl p-5 bg-white dark:bg-n0">
                {/* Delete all chats */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-n700 dark:text-n30 text-sm font-medium">Delete all chats</p>
                    <p className="text-xs text-n400 dark:text-n300 mt-1">
                      This will permanently delete all your chat history
                    </p>
                  </div>
                  <button 
                    className="py-2 px-6 bg-errorColor/10 hover:bg-errorColor text-errorColor hover:text-white rounded-lg border border-errorColor/30 transition-all duration-300 text-sm font-medium"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete all chats? This action cannot be undone.")) {
                        // Add delete functionality here
                        console.log("Delete all chats");
                      }
                    }}
                  >
                    Delete all
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-500">
              Other general settings are currently disabled.
            </p>
          </div>
        </div>
      )}

      {activeMenu === 1 && (
        <div className="flex flex-col gap-6 pt-6">
          <div className="p-5 border border-primaryColor/30 rounded-xl">
            <div className=" pb-5 border-b border-primaryColor/30">
              <p className="text-n700 font-medium  dark:text-n30">
                Change Password
              </p>
              <p className="pt-2 text-xs">
                If you want to change your password, then try it&apos;s
              </p>
            </div>

            <div className="grid grid-cols-12 gap-6 pt-6">
              <InputFieldSecond
                className="col-span-12"
                placeholder="*******"
                title="Old Password"
                type="password"
              />
              <InputFieldSecond
                className="col-span-6"
                placeholder="*******"
                title="New Password"
                type="password"
              />
              <InputFieldSecond
                className="col-span-6"
                placeholder="*******"
                title="Confirm Password"
                type="password"
              />
              <div className="flex justify-start items-center gap-2 text-xs col-span-12">
                <SmallButtons name="Save Changes" />
                <SmallButtons name="Reset Here" secondary={true} />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 2 && (
        <div className=" bg-primaryColor/5 border border-primaryColor/30 rounded-xl p-5 mt-6">
          <div className=" pb-5 border-b border-primaryColor/30">
            <p className="text-n700 font-medium  dark:text-n30">Appearance</p>
            <p className="pt-2 text-xs">
              Customize the look and feel of your interface
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-5 ">
            <div className="flex flex-col gap-4 items-start ">
              <div className=" ">
                <p className="text-n700 font-medium  dark:text-n30 text-sm">
                  Theme
                </p>
                <p className="pt-2 text-xs">
                  Select your preferred theme for the application.
                </p>
              </div>
              <div className="flex justify-start items-start bg-white p-2 rounded-xl border border-primaryColor/30 gap-2 dark:bg-n0">
                {themeSettingsData.map(({ id, name, icon }) => (
                  <div
                    className="bg-primaryColor/5 border border-primaryColor/30 py-3 px-10 flex flex-col justify-center items-center gap-2 rounded-xl cursor-pointer group hover:bg-primaryColor hover:border-primaryColor duration-300"
                    key={id}
                    onClick={() => setTheme(name.toLowerCase())}
                  >
                    <div className="flex justify-center items-center bg-white  text-primaryColor border border-primaryColor/30 p-2 text-xl rounded-full">
                      {React.createElement(icon)}
                    </div>
                    <p className="text-sm font-medium text-center group-hover:text-white">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsModal;
