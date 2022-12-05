import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useApi = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const [file, setFile] = useState()
const [url, setUrl] = useState()
const [error, setError]=useState("");
  function handleChange(event) {
    const textFile = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
    console.log("text",textFile)
    const file = event.target.files[0];
    if(file.name.split(".")[1]==="txt"){
    }
   else{
    return(
    setError("Invalid file selected !",
    setFile("")))
   } 
  setFile(event.target.files[0])
  }
  

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData();
    console.log("file",file)
    formData.append('expires', '20221206');
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
      
  localStorage.setItem('items', JSON.stringify(response));
    })
    .catch(function (error) {
         });
  }
  console.log("url", url)

  return { loading,setLoading, data,setData,file, setFile,url, setUrl,error, setError,handleSubmit,handleChange,error };
};

export default useApi;