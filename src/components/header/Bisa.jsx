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
        style={{marginTop:"30px", border:"1px solid black", width:"300px"}}
      />
      </>
  )
}

export default Bisa
