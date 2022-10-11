const Total = ({ inputtext, inputplace }) => {
  return (
    <>
      <div class="grid grid-cols-11 gap-1">
        <div>
          <input
            style={{ borderWidth: 0, cursor: "pointer" }}
            type="text"
            className="mt-1 px-3 py-2  placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-green-300 block w-full rounded-md sm:text-sm focus:ring-0"
            placeholder={inputtext}
          />
        </div>

        <div>
          {" "}
          <div style={{ width: 150 }}>
            <label>
              <input
                type="text"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-800 focus:outline-none focus:border-green-400 focus:ring-green-300 block w-full rounded-md sm:text-sm focus:ring-0"
                placeholder={inputplace}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default Total
