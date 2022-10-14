import {useState} from 'react'

const Leaderbar = ({judul,title}) => {
  const [kosong, setKosong] = useState(false)
    return(
        <>
        <div style={{ width: 220 }}>
        <label>
          <span className=" block text-sm font-medium text-slate-400" >{judul}</span>
          <textarea
            type="text"
            class={
              kosong 
              ? "h-16 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-400 focus:ring-red-300 block w-full rounded-md sm:text-sm focus:ring-0"
              : "h-16 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-400 focus:ring-green-300 block w-full rounded-md sm:text-sm focus:ring-0"
            }
            placeholder={title} 
            onChange={(e) => 
              {
                if (e.target.value.length === 0) { setKosong(true) }
                else { setKosong(false) }
              }
            }
          />
        </label>
      </div>
        </>
    )
}

export default Leaderbar