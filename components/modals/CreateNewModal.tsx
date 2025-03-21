import Image from "next/image";
import React from "react";
import { PiCloudArrowUp } from "react-icons/pi";
import icon from "@/public/images/create-new-bot-img.png";
import InputFieldSecond from "@/components/ui/InputFieldSecond";
import TextArea from "@/components/ui/TextArea";
import SmallButtons from "@/components/ui/buttons/SmallButtons";
import SelectDropdown from "../ui/SelectDropdown";
import { botCategory } from "@/constants/data";

export default function CreateNewModal() {
  return (
    <div>
      <div className="flex justify-start items-center pb-6 gap-3">
        <div className="flex justify-center items-center relative border rounded-full border-primaryColor/30 p-1.5">
          <Image src={icon} alt="" className="size-11 rounded-full" />
          <label
            htmlFor="photo-upload"
            className="bg-white dark:bg-n0 flex justify-center items-center absolute bottom-1 right-1 rounded-full p-0.5 cursor-pointer"
          >
            <PiCloudArrowUp />
            <input type="file" className="hidden" id="photo-upload" />
          </label>
        </div>
        <div className="">
          <p className="text-sm font-medium">Bot Logo</p>
          <p className="text-xs pt-1 ">
            Choose an avatar or image that represents bot
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-4">
        <InputFieldSecond
          className="col-span-12"
          placeholder="Enter bot name..."
          title="Bot Name"
        />
        <div className={"col-span-12 "}>
          <SelectDropdown
            options={botCategory}
            placeholder="Choose Category"
            title="Category"
          />
        </div>

        <TextArea
          className="col-span-12"
          placeholder="Enter description..."
          title="Description"
        />
        <InputFieldSecond
          className="col-span-12"
          placeholder="Add tag..."
          title="Capabilities"
        />
        <InputFieldSecond
          className="col-span-12"
          placeholder="Enter input..."
          title="Conversation Starters"
        />
      </div>
      <div className="flex justify-start items-center gap-2 pt-5 text-xs">
        <SmallButtons name="Add New Bot" />
        <SmallButtons name="Reset Here" secondary={true} />
      </div>
    </div>
  );
}
