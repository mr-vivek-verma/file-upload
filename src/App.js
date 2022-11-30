import './App.css';
import FileUpload from "./components/FileUpload/index"
import {Routes,Route} from 'react-router-dom';
import ListingPage from './components/FileUpload/listingPage';
function App() {
  return (
    
    <>
     <Routes>
     <Route exact path="/" element={<FileUpload/>}/>
     <Route exact path='/table' element={< ListingPage />}></Route>
     </Routes>
    
    </>
  );
}

export default App;
