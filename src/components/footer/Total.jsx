import { useState } from "react";

const Total = ({ inputtext, inputplace, value, onChange, style, button }) => {
  const [show, Hide] = useState(true);
  return (
    <>
      <div className=" columns-2 flex ">
        {show && (
          <>
            <div className="space-x-10 ">
              <input
                disabled
                style={{ borderWidth: 0, cursor: "pointer" }}
                type="text"
                className="mt-1 px-1  py-2  w-1/2  focus:outline-none focus:border-green-400 focus:ring-green-300   rounded-md sm:text-sm focus:ring-0 "
                placeholder={inputtext}
              />
            </div>
            <div>
              <div>
                <label>
                  <input
                    style={style}
                    type="text"
                    class="mt-2 px-3 ml-12 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-800 focus:outline-none focus:border-green-400 focus:ring-green-300 block w-full rounded-md sm:text-sm focus:ring-0"
                    placeholder={inputplace}
                    onChange={onChange}
                    value={value}
                  />
                </label>
              </div>
            </div>
          </>
        )}

        <div>
          <button CLass="ml-12 bg-green-500" onClick={() => Hide(!show)}>
            {show === true ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Total;
