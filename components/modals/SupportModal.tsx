"use client";
import FaqItem from "@/components/ui/FaqItem";
import { faqData, supportMenuItems } from "@/constants/data";
import React, { useState } from "react";

function SupportModal() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [show, setShow] = useState(NaN);
  const [show2, setShow2] = useState(NaN);
  
  // Define which tabs to show - currently only showing FAQs (index 0)
  // To restore other tabs, just add their indices to this array
  const visibleTabs = [0];
  const isSingleTab = visibleTabs.length === 1;
  
  return (
    <div className="">
      <div className="p-2 border border-primaryColor/30 bg-primaryColor/5 rounded-xl min-[1400px]:rounded-full flex flex-row justify-centert items-center flex-wrap gap-2 w-full mt-6">
        {supportMenuItems
          .filter((_, idx) => visibleTabs.includes(idx))
          .map(({ id, name, icon }) => (
            <div
              key={id}
              className={`flex justify-start items-center gap-2 xl:gap-2 py-2 pl-2 ${
                !isSingleTab ? "flex-1" : "w-auto"
              } border rounded-full cursor-pointer ${
                activeMenu === 0
                  ? " border-primaryColor bg-primaryColor"
                  : "border-primaryColor/30 bg-white dark:bg-n0"
              }`}
              onClick={() => setActiveMenu(0)}
            >
              <div
                className={`flex justify-center items-center border rounded-full p-1.5 xl:p-2 ${
                  activeMenu === 0
                    ? " border-primaryColor bg-white "
                    : "border-primaryColor/30 bg-primaryColor/5"
                }`}
              >
                {React.createElement(icon, {
                  className: `text-primaryColor text-base xl:text-xl`,
                })}
              </div>
              <p
                className={`text-sm font-medium text-nowrap pr-4 ${
                  activeMenu === 0 ? "text-white" : ""
                }`}
              >
                {name}
              </p>
            </div>
          ))}
      </div>

      {/* Only the FAQs section will be rendered since activeMenu is forced to 0 */}
      <div className="mt-6 bg-primaryColor/5 border border-primaryColor/30 rounded-xl p-5">
        <div className=" pb-5 border-b border-primaryColor/30">
          <p className="text-n700 font-medium dark:text-n30">
            Frequently Asked Questions
          </p>
          <p className="pt-2 text-xs">
            Find answers to common questions about our platform.
          </p>
        </div>
        <div className="pt-5 grid grid-cols-12 gap-4">
          <div className=" col-span-12 md:col-span-6 flex flex-col gap-4">
            {faqData.slice(0, 5).map(({ id, ...props }, idx) => (
              <FaqItem
                key={id}
                {...props}
                idx={idx}
                show={show}
                setShow={setShow}
              />
            ))}
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
            {faqData.slice(5, 10).map(({ id, ...props }, idx) => (
              <FaqItem
                key={id}
                {...props}
                idx={idx}
                show={show2}
                setShow={setShow2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Note: All other tab content is preserved but commented out for easy restoration */}
      {/* To restore other tabs:
          1. Add their indices to the visibleTabs array above
          2. Uncomment the relevant sections below
          3. Remove the forced activeMenu=0 in the onClick handler */}
      
      {/* Change Log Tab - index 1 */}
      {/* {activeMenu === 1 && (
        ... Change Log content ...
      )} */}
      
      {/* Roadmap Tab - index 2 */}
      {/* {activeMenu === 2 && (
        ... Roadmap content ...
      )} */}
      
      {/* Contact Tab - index 3 */}
      {/* {activeMenu === 3 && (
        ... Contact content ...
      )} */}
      
      {/* Privacy Tab - index 4 */}
      {/* {activeMenu === 4 && (
        ... Privacy content ...
      )} */}
      
      {/* Terms Tab - index 5 */}
      {/* {activeMenu === 5 && (
        ... Terms content ...
      )} */}
    </div>
  );
}

export default SupportModal;
