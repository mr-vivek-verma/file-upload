import './style.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function FileUpload() {
  const navigate = useNavigate();
  const [file, setFile] = useState()
const [url, setUrl] = useState()

  function handleChange(event) {
    const textFile = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
    console.log("text",textFile)
    const file = event.target.files[0];
    if(file.name.split(".")[1]==="txt"){
    }
   else{
    return(
    alert("Invalid file"),
    setFile(""))
   } 
  setFile(event.target.files[0])
  }
  

  function handleSubmit(event) {
    event.preventDefault()
    // const url = 'https://file.io/W51bFtAy8FaT';
    const formData = new FormData();
    console.log("file",file)
    formData.append('expires', '20221201');
    formData.append('maxDownloads', '1');
    formData.append('autoDelete', 'true');
    formData.append('file',file);
     formData.append('name', file.name);

    console.log("fomdadta", formData)

    var config = {
      method: 'post',
      url: 'https://file.io/',
      headers: { 
        'accept': 'application/json', 
        'Authorization': 'Bearer 5453d06f-12a7-4813-95a7-66543bfcfcf7', 
        ...formData
      },
      data : formData
    };
    
    axios(config)
    .then(function (response) {
      setUrl(response.data)
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      alert("Please check the file")
    });
  }

  useEffect(()=>{
    localStorage.setItem("items", JSON.stringify(url? url:""))
  },[url, localStorage])
  
  console.log("url", url)
  return (
    <div className="main-div">
        <div className='inner-div'>
        <form className='frm' onSubmit={handleSubmit}>
          <h1>File Upload</h1>
          <input type="file" multiple onChange={handleChange}/>
          <button className='btn' type="submit">Upload File</button>
          <h5>File extension should be txt</h5>  
           </form>
        {!url? "" : <div>
        <p>You can download/share file using below link </p>
        <span>{url?.link}</span> </div> }
        <button className='btn1' onClick={() => navigate("table")}>Show Download List</button>
        </div>
    </div>
  );
}

export default FileUpload;