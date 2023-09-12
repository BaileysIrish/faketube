import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

export default function Sidebar() {
  return (
    <aside className="px-8 pb-8 h-full w-60 ">
      <ul className="">
        <li className="flex items-center mb-4">
          <GoHomeFill className="text-2xl mr-5" /> <span>홈</span>
        </li>
        <li className="flex items-center mb-4">
          <MdOutlineSubscriptions className="text-2xl mr-5" />
          <span>구독</span>
        </li>
        <li className="flex items-center mb-4">
          <MdVideoLibrary className="text-2xl mr-5" />
          <span>보관함</span>
        </li>
        <li className="flex items-center mb-4">
          <AiFillLike className="text-2xl mr-5" />
          <span>좋아요</span>
        </li>
      </ul>
    </aside>
  );
}
