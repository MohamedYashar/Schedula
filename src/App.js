import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Home from './Pages/Home'
import Appoinment from './Pages/Appoinment'
import Logout from './Pages/Logout'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <SideBar>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Appoinment' element= {<Appoinment/>}/>
        <Route path='/Logout' element= {<Logout/>}/>
      </Routes>
      </SideBar>
      </BrowserRouter>
     
   
    </div>
  );
}


export default App;
