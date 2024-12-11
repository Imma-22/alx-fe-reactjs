import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUserData, setLoading, setError }) {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      return;
    }

    setLoading(true);
    setError(""); // Reset the error message
    setUserData(null); // Clear previous user data

    const data = await fetchUserData(username);
    
    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we can't find that user.");
    }

    setLoading(false);
    setUsername(""); // Reset the input field after the search
  };

  return (
    <div className="search-container text-center">
      <form onSubmit={handleSubmit} className="my-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border rounded-md"
          placeholder="Enter GitHub username"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;