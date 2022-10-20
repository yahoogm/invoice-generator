import React, { useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;
const Bisa = () => {
  const [value, setValue] = useState("");
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
        className="mt-[30px] border border-gray-200 w-[300px] outline-none p-2 rounded-md text-gray-600"
      />
    </>
  );
};

export default Bisa;
