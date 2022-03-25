//import logo from './logo.svg';
import './App.css';
import Datafetching from './components/Datafetching';
import FinalPage from './components/FinalPage';
import Page1 from './components/Page1';
import {Routes,Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/questions" element={<Datafetching/>}/>
        <Route path="/final" element={<FinalPage/>}/>
      </Routes>
      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
