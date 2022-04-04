//import logo from './logo.svg';
import './App.css';
import Datafetching from './components/Datafetching';
import FinalPage from './components/FinalPage';
import Page1 from './components/Page1';
import {Routes,Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';


function App() {
  //console.log(data)
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/questions/:id" element={<Datafetching/>}/>
        <Route path="/final" element={<FinalPage/>}/>
        <Route path="/home" element={<Page1/>}/>
      </Routes>
      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
