const Sidebar = ({ title, place }) => {
  return (
    <>
      <div style={{ width: 420 }}>
        <label>
          <span className=" block text-sm font-medium text-slate-400">{title}</span>
          <input
            type="text"
            class="h-16 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-green-300 block w-full rounded-md sm:text-sm focus:ring-0"
            placeholder={place}
          />
        </label>
      </div>
    </>
  )
}
export default Sidebar
