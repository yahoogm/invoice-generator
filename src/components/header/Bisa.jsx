import React, { useState } from 'react';
import { Input } from 'antd';



const { TextArea } = Input;
const Bisa = () => {
    const [value, setValue] = useState('');
  return (
    <>
    <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Who is this invoice from? (required)"
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
        className="border border-gray-600 print:border-hidden"
        style={{marginTop:"30px", width:"300px",outline: "none"}}
      />
      </>
  )
}

export default Bisa
