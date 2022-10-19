import { useState } from "react"

import { IoMdClose } from "react-icons/io"
import { HiPlus } from "react-icons/hi"

const Total = ({ inputtext, inputplace, value, onChange, style, button }) => {
  const [show, Hide] = useState(true)
  return (
    <>
      <div className="flex justify-between space-x-4 w-full">
        {show && (
          <>
            <div className="space-x-10 ">
              <input
                style={{ borderWidth: 0, cursor: "pointer" }}
                type="text"
                className="mt-1 px-1  py-1  w-full text-gray-600  duration-300 border rounded-sm p-1 hover:border-gray-400  focus:outline-[#009e74]  placeholder:text-gray-400"
                placeholder={inputtext}
              />
            </div>

            <div>
              <input
                style={style}
                type="text"
                className="mt-1 px-1  py-1  w-30  text-gray-600 w-full duration-300 border rounded-sm p-1 hover:border-gray-400  focus:outline-[#009e74]  placeholder:text-gray-400 "
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
  )
}

export default Total
