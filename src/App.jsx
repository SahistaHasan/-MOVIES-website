
import Home from './pages/Home';

import Player from './pages/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Routes, Route} from "react-router-dom";
function App() {
  

  return (
    <>

    <Routes>
    <Route path='/' element={<Home/>}/>
  
    <Route path='/Player/:id' element={<Player/>}/>
    </Routes>
    
   
    
   
    
     
    </>
  )
}

export default App
