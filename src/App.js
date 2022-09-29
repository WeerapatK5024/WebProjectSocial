import './app.css';
import React ,{useState,useContext} from 'react';
import ThreadList from './components/ThreadList';
import Nav from './components/Nav';
import { ThreadProvider } from './ThreadContext';
import AddThread from './AddThread';
import Login from './components/Login'; 


function App() {

  return (
    <ThreadProvider>
    <div>
      
    <div className='Headder'>
    <div className='homeText'>
    HOME / PAGE 
    </div>
    <Login></Login>
  </div>

  <div className="mainFrame">
  <div>
    <Nav></Nav>  
    <ThreadList/>
    
  </div>
 <AddThread/>
  </div>
  
    </div>
    </ThreadProvider>
  );
}

export default App;
