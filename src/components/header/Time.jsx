import React from 'react'
import { useInvoice } from '../../hooks/context'

const Time = () => {
  const { field1, setField1 } = useInvoice()
  console.log(field1)
  return (
    <div className='flex flex-col items-end justify-between mr-5'>

      <div className='flex flex-col gap-4'>
          <input dir="rtl" type="text" style={{width:"350px", height:"85px",fontSize:"40px"}}></input>
          <input type="text"/>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-row gap-2'>
          <input type="text" placeholder="test"style={{ marginTop:"8px", width:"300px" }}></input>
          <input type="date"  style={{ border:"1px solid black", width:"300px" }} ></input>
        </div>
        
        <div className='flex flex-row gap-2'>
          <input type="text" placeholder="test"style={{marginTop:"8px", width:"300px" }}></input>
          <input type="text" style={{border:"1px solid black", marginTop:"8px", width:"300px" }}></input>
        </div>
        <div className='flex flex-row gap-2'>
          <input type="text" placeholder="test"style={{ marginTop:"8px", width:"300px" }}></input>
          <input type="date" style={{border:"1px solid black", marginTop:"8px", width:"300px"  }}></input><br/>
        </div>
        <div className='flex flex-row gap-2'>
          <input type="text" placeholder="test"style={{ marginTop:"8px", width:"300px" }}></input>
          <input type="text" style={{border:"1px solid black", marginTop:"8px",width:"300px" }}></input>
        </div>
      </div>
    </div>
  )
}

export default Time
