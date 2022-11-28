import './style.css';
import React, {useState} from 'react';
import axios from 'axios';

function FileUpload() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'https://file.io/W51bFtAy8FaT';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="files">
        <form  onSubmit={handleSubmit}>
          <h1>File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button className='btn' type="submit">Upload</button>
        </form>
    </div>
  );
}

export default FileUpload;