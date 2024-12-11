import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App text-center p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <SearchBar setUserData={setUserData} />
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;