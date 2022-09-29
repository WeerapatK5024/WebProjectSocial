import './app.css';

import { db } from './firebase';
import { collection, Collections, onSnapshot, snapshotEqual } from 'firebase/firestore';
import React, { useState, useContext, useEffect } from 'react';
import ThreadList from './components/ThreadList';
import Nav from './components/Nav';
import { ThreadProvider } from './ThreadContext';
import AddThread from './AddThread';


import { AuthContextProvider } from './authContext';
import Login from './components/Login'; 



function App() {
  // useEffect(() => {
  //   onSnapshot(collection(db, 'post'), (snapshot) => {
  //     AddThread(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [input]);

  return (
    <AuthContextProvider>
      <ThreadProvider>
        <div>

          <div className='Headder'>
            <div className='homeText'>
              HOME / PAGE
            </div>
          </div>

          <div className="mainFrame">
            <div>
              <Nav></Nav>
              <ThreadList />

            </div>
            <AddThread />
          </div>

        </div>
      </ThreadProvider>
    </AuthContextProvider>

  );
}

export default App;
