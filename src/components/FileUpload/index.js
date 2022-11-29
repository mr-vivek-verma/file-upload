import './style.css';
import React, {useState} from 'react';
import axios from 'axios';


function FileUpload() {

  const [file, setFile] = useState()

  function handleChange(event) {
    const textFile = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
    console.log("text",textFile)
    const file = event.target.files[0];
    if(file.name.split(".")[1]==="txt"){
    }
   else{
    alert("Invalid file")
    setFile("");
   } 
  setFile(event.target.files[0])
  }
  

  function handleSubmit(event) {
    event.preventDefault()
    // const url = 'https://file.io/W51bFtAy8FaT';
    const formData = new FormData();
    console.log("file",file)
    formData.append('expires', '20221130');
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="main-div">
        <div className='inner-div'>
        <form className='frm' onSubmit={handleSubmit}>
          <h1>File Upload</h1>
          
          <input type="file" onChange={handleChange}/>
          <button className='btn' type="submit">Upload Files</button>
          <h5>File extension should be txt</h5>  
        </form>
        
        </div>
    </div>
  );
}

export default FileUpload;