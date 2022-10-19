import React from 'react';

const Time = () => {
  return (
    <div className="flex flex-col items-end justify-between mr-5 mt-4">
      <div className="flex flex-col gap-4 mb-20">
        <input dir="rtl" type="text" defaultValue="invoice" className="w-[70%] outline-none text-4xl h-20 ml-[80px]"></input>
        <input type="text" className="border border-gray w-[60%] ml-[140px] outline-none"  />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="date" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input placeholder="" class="border border-gray w-[40%] outline-none" type="text" onFocus={(e) => e.target.type='date'} onblur={(e) => e.target.type='text'} id="date" />
        </div>

        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="payment terms" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input type="text" className="mt-2 w-[40%] outline-none border border-gray " ></input>
        </div>

        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="Due date" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input placeholder="" className="border border-gray w-[40%] mt-2 outline-none" type="text" onFocus={(e) => e.target.type='date'} onblur={(e) => e.target.type='text'} id="date" />
          <br />
        </div>
        <div className="flex flex-row gap-2">
          <input dir="rtl" type="text" defaultValue="PO Number" className="mt-2 w-[28%] outline-none ml-[110px]"></input>
          <input type="text" className="mt-2 w-[40%] outline-none border border-gray "></input>
        </div>
      </div>
    </div>
  );
};

export default Time;
