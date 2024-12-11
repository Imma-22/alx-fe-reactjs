import React, { useState } from "react";
import { getUserData } from "../services/githubService";

function SearchBar({ setUserData }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    if (!username) {
      setError("Please enter a username.");
      return;
    }

    const data = await getUserData(username);

    if (data) {
      setUserData(data);
    } else {
      setError("User not found. Please check the username.");
    }

    setUsername(""); // Reset input field after search
  };

  return (
    <div className="search-bar-container w-full max-w-sm mx-auto my-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default SearchBar;
