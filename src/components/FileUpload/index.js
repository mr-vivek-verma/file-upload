import './style.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useApi from '../Hooks/useApi';


function FileUpload() {
  const navigate = useNavigate();
  const { loading,setLoading, data,setData,file, setFile,url, setUrl,error, setError,handleSubmit,handleChange} =useApi()
  return (
    <div className="main-div">
        <div className='inner-div'>
        <form className='frm' onSubmit={handleSubmit}>
          <h1>File Upload</h1>
          <input type="file" multiple onChange={handleChange}/>
          <button className='btn' type="submit">Upload File</button>
           </form>
           <div>
           {error? <h2>{error}</h2> :  <span></span>}
           </div>
        <button className='btn1' onClick={() => navigate("table")}>Show Download List</button>
        </div>
    </div>
  );
}

export default FileUpload;