const Sidebar = ({ title, place }) => {
  return (
    <>
      <div>
        <label>
          <span className=" block text-sm font-medium text-slate-400">{title}</span>
          <textarea
            style={{ width: 441, height: 70 }}
            type="text"
            className="m2-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-red-300 block w-full rounded-md sm:text-sm focus:ring-0"
            placeholder={place}
          />
        </label>
      </div>
    </>
  )
}

export default Sidebar