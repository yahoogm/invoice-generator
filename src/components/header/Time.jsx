import React from "react";

const Time = () => {
  return (
    <div className="flex flex-col items-end justify-between mr-5 mt-4">
      <div className="flex flex-col gap-4 mb-20">
        <input dir="rtl" type="text" defaultValue="INVOICE" className="w-[70%] outline-none text-4xl h-20 ml-[80px] "></input>
        <input type="text" className="border border-gray w-[60%] ml-[140px] outline-none rounded-md py-1 px-2 text-gray-600 hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none" />
      </div>

      <div className="flex flex-col text-gray-600">
        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="Date" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input
            placeholder=""
            className="border border-gray w-[40%] outline-none px-2 py-1 rounded-md hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            id="date"
          />
        </div>

        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="Payment Terms" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input type="text" className="mt-2 w-[40%] outline-none border border-gray px-2 py-1 rounded-md hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none"></input>
        </div>

        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="Due Date" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input
            placeholder=""
            className="border border-gray w-[40%] mt-2 outline-none px-2 py-1 rounded-md hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            id="date"
          />
          <br />
        </div>
        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="PO Number" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input type="text" className="mt-2 w-[40%] outline-none border border-gray px-2 py-1 rounded-md hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none"></input>
        </div>
      </div>
    </div>
  );
};

export default Time;
