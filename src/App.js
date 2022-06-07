
import React from "react";
import './components/NavTabs';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Resume' element={<Resume/>}/>
            <Route path='/myWork' element={<Work/>}/>
            <Route path='/AboutMe' element={<AboutMe/>}/>
            <Route path='/ContactMe' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;


