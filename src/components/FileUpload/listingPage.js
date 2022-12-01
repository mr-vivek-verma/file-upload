import {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
      const [items, setItems] = useState([]);
      const navigate = useNavigate();
      const data = "" ||  JSON.parse(localStorage.getItem("items"))
     console.log("data", data)
      
      const download =(e)=>{
          console.log("clicked")
          return(
            navigate(data?.link))
      }

  return (
    <div>
        <table>
        <tbody>
        <tr>
          <th>File Name</th>
          <th>Share Link</th>
          <th>Max Download</th>
          <th>Download File</th>
          <th>File Delete</th>
        </tr>
             <tr key={data?.data?.id}>
             <td>{data?.data?.name}</td>
              <td>{data?.data?.link}</td>
              <td>{data?.data?.maxDownloads}</td>
              <td> <a href={data?.data?.link}><img src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png" alt="download"/></a></td>
             {!data? "" : <td><button onClick={()=>{localStorage.clear("items") }}>Delete</button></td>}
          
            </tr>
            </tbody>         
      </table>
    </div>
  )
}

export default ListingPage