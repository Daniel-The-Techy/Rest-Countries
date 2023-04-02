import logo from './logo.svg';
import './App.css';
import Countryheader from './Components/Countrys/Countryheader';
import Country from './Components/Countrys/Country';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Fetchcountry from './Components/Countrys/Fetchcountry'


export const ThemeContext=React.createContext();

function App() {

  const [Theme, setTheme] = useState(false)

  const SwitchTheme = (e) => {
    e.preventDefault();
    setTheme((prevState) => !prevState)
  }


  return (
    
    <div className={Theme ? 'darkmode' : 'bg-white'}>
        <Countryheader Switchmode={SwitchTheme} Themechange={Theme}/>
           <Router>
            <Routes>

              <Route  path='/' element={
            <>
               <Country bg={Theme}/>
               </>
               }/>
            
            <Route path="Country/:id" element={<Fetchcountry/>} theme={Theme}/>
               </Routes>
               
               </Router>

              </div>
            
  

  );
}

export default App;
