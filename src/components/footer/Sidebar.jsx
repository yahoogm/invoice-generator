const Sidebar = ({ title, place }) => {
  return (
    <>
      <div>
        <label>
          <span className=" block text-sm font-medium text-slate-400">{title}</span>
          <textarea type="text" className="m2-1 px-3 py-2 text-gray-600 w-[75%] duration-300 border rounded-md p-1 hover:border-gray-400  focus:outline-[#009e74]  placeholder:text-gray-400 overflow-hidden" placeholder={place} />
        </label>
      </div>
    </>
  )
}

export default Sidebar
