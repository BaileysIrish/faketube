import React, { useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [text, setText] = useState();
  const handleUpdate = (e) => setText(e.target.value);
  return (
    <>
      <header className="w-full flex items-center justify-between p-4 sticky top-0 border-b border-gray-100 mb-4 bg-white">
        <div id="start" className="flex items-center transform translate-x-4">
          <VscMenu className="text-xl" />
          <Link to="/" className="flex items-center transform translate-x-6">
            <BsYoutube className="text-3xl text-red-600 brightness-150" />
            <h2 className="text-xl relative">
              Faketube
              <span className="text-xs opacity-80 absolute">KR</span>
            </h2>
          </Link>
        </div>
        <div id="center" className="w-full flex justify-center">
          <form className="w-full flex justify-center">
            <input
              className="border w-2/5 p-2 border-gray-50 rounded-l-3xl shadow-[0px_1px_3px_1px_#00000024] focus:outline-none text-zinc-950 text-base"
              type="text"
              placeholder="search..."
              value={text}
              onChange={handleUpdate}
            />
            <button className="bg-gray-50 px-4 rounded-r-3xl shadow-[0px_1px_3px_1px_#00000024] text-black">
              <BsSearch />
            </button>
          </form>
        </div>
        <div id="end">
          <h2>img</h2>
        </div>
      </header>
    </>
  );
}
