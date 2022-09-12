import './App.css';
import Nav from './components/Nav';
import Currencies from './components/Currencies';
import Main from './components/Main';
import Price from './components/Price';
import Four04 from './components/404';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [crypto, setCrpto] = useState([]);
  // Some API call to get all crypto 
  // prices and then pass that as props
  
  return (
    <>
      <h1>Lets send Doge to the moon!</h1>
      <Nav />
      <Outlet />
      <Routes >
        <Route exact path='/' element={<Main crypto={crypto}/>} />
        <Route path='/currencies/' >
          <Route exact path='' element={<Currencies />} />
          <Route path=':symbol' element={<Price />} />
        </Route>
        {/* <Route exact path='/currencies/:symbol' element=... */}
        <Route path='/*' element={<Four04 />} />
      </Routes>
    </>
  );
}

export default App;
