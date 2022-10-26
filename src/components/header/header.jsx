import { PlusOutlined } from "@ant-design/icons"
import { Upload } from "antd"
import React, { useState } from "react"

const Header = () => {
  const [fileList, setFileList] = useState([])

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)

  const uploadButton = (
    <div className="border border-gray-300 bg-gray-200 w-[250px] h-[150px] rounded-md ">
      <PlusOutlined className="mt-[60px] ml-[25px]" />
      <div className="-mt-[20px] ml-[50px] text-gray-600">Add Your Logo</div>
    </div>
  )
  return (
    <>
      <Upload
        listType="picture-card"
        onChange={handleChange}
        fileList={fileList}
        beforeUpload={() => {
          return false
        }}
      >
        {fileList.length === 0 ? uploadButton : null}
      </Upload>
    </>
  )
}

export default Header
