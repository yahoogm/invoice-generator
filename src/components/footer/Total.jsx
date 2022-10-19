import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";

const Total = ({ inputtext, inputplace, value, onChange, style, button }) => {
  const [show, Hide] = useState(true);
  return (
    <>
      <div className="flex justify-between space-x-4">
        {show && (
          <>
            <div className="space-x-10 ">
              <input
                style={{ borderWidth: 0, cursor: "pointer" }}
                type="text"
                className="mt-1 px-1  py-1  w-full bg-white focus:outline-none focus:border-green-400 focus:ring-green-300   rounded-md sm:text-sm focus:ring-0 "
                placeholder={inputtext}
              />
            </div>

            <div>
              <input
                style={style}
                type="text"
                className="mt-1 px-1  py-1  w-30  focus:outline-none focus:border-green-400 focus:ring-green-300 sm:text-sm focus:ring-0 border border-slate-400"
                placeholder={inputplace}
                onChange={onChange}
                value={value}
              />
            </div>
          </>
        )}
        <div className=" py-2">
          <button className="text-white hover:text-black" onClick={() => Hide(!show)}>
            {show === true ? <IoMdClose /> : <HiPlus />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Total;
