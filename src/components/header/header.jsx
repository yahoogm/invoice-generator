import {  PlusOutlined } from '@ant-design/icons';
import {  Upload } from 'antd';
import React, { useState } from 'react';


const Header = () => {
  const [fileList, setFileList] = useState([]);
  
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div style={{border:"1px solid black", width:"250px", height:"150px", background:"silver"}}>
      <PlusOutlined style={{marginTop:"60px", marginLeft:"25px"}}/>
      <div
        style={{
          marginTop: "-20px",
          marginLeft:"50px"
        }}
      >
        add your logo
      </div>
    </div>
  );
  return (
    <>
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      onChange={handleChange}
      fileList={fileList}
      beforeUpload={() => { return false }}
    >
      {fileList.length === 0 ? uploadButton : null}
    </Upload>
    </>
  );
};

export default Header;