/* eslint-disable no-unused-vars */
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const userData = { name: "Jolie Alice", email: "Alice@gmail.com" };

  return (
       
      <UserContext.Provider value={userData}>
      <ProfilePage/>
      <UserProfile/>
      </UserContext.Provider>
    
  );
}

export default App

