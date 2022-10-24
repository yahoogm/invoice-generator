import React, { useState } from "react"
import { Input } from "antd"

const { TextArea } = Input
const Bisa = () => {
  const [value, setValue] = useState("")
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
        className="p-2 border border-gray-400 print:border-hidden"
        style={{ marginTop: "30px", width: "280px", outline: "none" }}
      />
    </>
  )
}

export default Bisa
