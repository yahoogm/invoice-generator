const Sidebar = ({ title, place, value, onChange }) => {
  return (
    <>
      <div>
        <label>
          <span className=" block text-sm font-medium text-slate-400">{title}</span>
          <textarea
            type="text"
            className="m2-1 px-3 py-2 text-gray-600 w-[75%]  border rounded-md p-1 hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none placeholder:text-gray-400 overflow-hidden print:border-hidden print:outline-hidden print:shadow-none print:ring-0 print:resize-none"
            placeholder={place}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  )
}

export default Sidebar
