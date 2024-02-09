import React from 'react';
import './App.css';
import Signin from './Component/pages/Signin';
import Accueil from './Component/pages/Accueil';
import Produits from './Component/pages/Produits';
import Signup from './Component/pages/Signup';
import Contact from './Component/pages/Contact';
import Forum from './Component/pages/Forum';
import Articles from './Component/Articles';
import SoinsMédical from './Component/pages/SoinsMédical';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Accueil/>}/>
        <Route path="/accueil" element={<Accueil/>}/>
        <Route path="/produits" element={<Produits/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/soinsmédical' element={<SoinsMédical/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/articles" element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
