
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


import { db } from "./firebase";
import {
  collection,
  Collections,
  onSnapshot,
  snapshotEqual,
} from "firebase/firestore";
import React, { useState, useContext, useEffect } from "react";
import ThreadList from "./components/ThreadList";
import Nav from "./components/Nav";
import { ThreadProvider } from "./ThreadContext";
import AddThread from "./AddThread";
import Signup from "./components/Signup";

// import { Add } from '@mui/icons-material';
import { AuthContextProvider } from "./authContext";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./components/Account";
import { BrowserRouter, Link } from "react-router-dom/dist";

function App() {
  // useEffect(() => {
  //   onSnapshot(collection(db, 'post'), (snapshot) => {
  //     AddThread(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [input]);

  return (
    <>
    <AuthContextProvider>
      <ThreadProvider>
        <div>
          <div className="Headder">
            <div className="homeText">HOME / PAGE</div>
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
    <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup />} />

              {/* <Route path='/account'element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } 
            /> */}
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
