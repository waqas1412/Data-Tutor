"use client";
import React from "react";
import AnimateHeight from "react-animate-height";
import { PiMinus, PiPlus } from "react-icons/pi";
import ReactMarkdown from "react-markdown";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
};

function FaqItem({ question, answer, isExpanded, onToggle, className = '' }: FaqItemProps) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-xl border flex flex-col ${
        isExpanded
          ? "bg-primaryColor border-primaryColor"
          : "border-primaryColor/30 bg-white dark:bg-n0"
      } px-6 py-3 duration-300 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h6
          className={`font-medium ${
            isExpanded ? "text-black " : "text-n700 dark:text-n30"
          } duration-300 text-justify`}
        >
          <ReactMarkdown components={{
            p: (props) => <span className="markdown text-justify" {...props} />
          }}>{question}</ReactMarkdown>
        </h6>
        <div
          className={`p-1 rounded-md ${
            isExpanded ? "bg-errorColor text-white" : "bg-primaryColor text-white"
          }`}
        >
          {isExpanded ? <PiMinus /> : <PiPlus />}
        </div>
      </div>
      <AnimateHeight height={isExpanded ? "auto" : 0}>
        <div
          className={`text-xs ${
            isExpanded ? "text-black" : ""
          } duration-300 pt-3 border-t border-dashed border-black mt-3 text-justify markdown`}
        >
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </AnimateHeight>
    </div>
  );
}

export default FaqItem;
