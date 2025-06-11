import { Navbar } from './components/Header/Navbar';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/Aboutus/About';
import { Allpumps } from './components/AllPumps/Allpumps';
import { PumpSelectionTool } from './components/PumpSelectionTool/PumpSelectionTool';
import { WarrantyRegistration } from './components/WarrantyRegistration/WarrantyRegistration';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/all-pumps' element={<Allpumps/>}></Route>
        <Route path='/pump-selection-tool' element={<PumpSelectionTool/>}></Route>
        <Route path='/warranty-registration' element={<WarrantyRegistration/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
