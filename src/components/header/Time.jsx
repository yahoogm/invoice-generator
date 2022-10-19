import React from 'react';

const Time = () => {
  return (
    <div className="flex flex-col items-end justify-between mr-5 mt-4">
      <div className="flex flex-col gap-4 mb-20">
        <input dir="rtl" type="text" style={{ width: '350px', height: '85px', fontSize: '40px' }}></input>
        <input type="text" />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <input type="text" placeholder="" style={{ marginTop: '8px', width: '300px' }}></input>
          <input placeholder="" class="border border-black w-72" type="text" onFocus={(e) => e.target.type='date'} onblur={(e) => e.target.type='text'} id="date" />
        </div>

        <div className="flex flex-row gap-2">
          <input type="text" placeholder="" style={{ marginTop: '8px', width: '300px' }}></input>
          <input type="text" style={{ border: '1px solid black', marginTop: '8px', width: '288px' }}></input>
        </div>

        <div className="flex flex-row gap-2">
          <input type="text" placeholder="" style={{ marginTop: '8px', width: '300px' }}></input>
          <input placeholder="" class="border border-black w-72 mt-2" type="text" onFocus={(e) => e.target.type='date'} onblur={(e) => e.target.type='text'} id="date" />
          <br />
        </div>
        <div className="flex flex-row gap-2">
          <input type="text" placeholder="" style={{ marginTop: '8px', width: '300px' }}></input>
          <input type="text" style={{ border: '1px solid black', marginTop: '8px', width: '288px' }}></input>
        </div>
      </div>
    </div>
  );
};

export default Time;
