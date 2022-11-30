import {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
      const [items, setItems] = useState([]);
      const navigate = useNavigate();
const data = JSON.parse(localStorage.getItem("items"))
console.log("daa", data)

const download =(e)=>{
    console.log("clicked")
    return(
      navigate(data?.link))
}

  return (
    <div>
        <table>
        <tr>
          <th>File Name</th>
          <th>Expires</th>
          <th>Max Download</th>
          <th>Download File</th>
          <th>File Delete</th>
        </tr>
             <tr key={data?.id}>
              <td>{data?.name}</td>
              <td>{data?.expires}</td>
              <td>{data?.maxDownloads}</td>
              <td> <a href={data?.link}>Download</a></td>
             {!data? "" : <td><button onClick={()=>{localStorage.clear("items") }}>Del</button></td>}
          
            </tr>
       
      </table>
    </div>
  )
}

export default ListingPage