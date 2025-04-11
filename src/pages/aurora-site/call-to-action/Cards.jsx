import { Quote } from "lucide-react";

/* eslint-disable react/prop-types */
export function SkillCards({ icons, tag, content }) {
  return (
    <div className="bg-white rounded-[8px] w-full lg:w-[238px] h-[172px] p-4 flex-col flex shadow-sm items-center justify-center">
      {icons}

      <strong className="font-bold  text-[#09090B] text-lg">{tag}</strong>
      <p className="text-center  w-full flex flex-col font-normal text-lg lg:text-sm">
        {content}
      </p>
    </div>
  );
}

export function CoursesCard({ icons, tag, content }) {
  return (
    <div className="flex-col flex w-full lg:w-[434px] h-[148px] p-[24px] bg-[#FFFFFF] rounded-[8px] border-none">
      <div className="flex flex-row gap-4">
        {icons}
        <div className=" flex flex-col ">
          <p className="text-[#09090B] font-bold text-xl lg:text-base ">
            {tag}
          </p>
          <p className="text-[#71717A] font-normal text-lg lg:text-sm ">
            {content}
          </p>
        </div>
      </div>
      <button className="bg-[#00B8D4] text-[#FAFAFA] font-medium text-sm rounded-[6px] border-none ">
        Start Learning
      </button>
    </div>
  );
}

export function WhyChooseAuruora({ icons, tag, content }) {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[320px] bg-[#1F2937] rounded-[8px] p-[24px] h-[220px]">
      {icons}
      <strong className="font-bold text-center text-[#FFFFFF] text-xl">
        {tag}
      </strong>
      <p className="text-center w-full text-[#71717A] flex font-normal text-base">
        {content}
      </p>
    </div>
  );
}

export function CTACard({ children, styles }) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        styles ?? "w-[320px] bg-[#1F2937]rounded-[8px] p-[24px] h-[220px]"
      } `}
    >
      {children}
    </div>
  );
}

export function WhatOurUsersSay({ name, tag, content }) {
  return (
    <div className="flex-col flex w-full lg:w-[320px] h-[228px] py-[24px] p-[24px] bg-[#FFFFFF] rounded-[8px] border-none">
      <div className="flex flex-row gap-4 w-full">
        <div className="w-[40px] h-[40px] rounded-full bg-[#00B8D41A]/10 flex items-center justify-center">
          <Quote className="text-[#00B8D4]" />
        </div>
        <div className=" flex flex-col w-full">
          <p className="text-[#111827] font-semibold text-base ">{name}</p>
          <p className="text-[#71717A] font-normal text-sm ">{tag}</p>
        </div>
      </div>
      <p className=" text-[#4B5563] font-normal text-base w-full  ">
        {content}
      </p>
    </div>
  );
}
