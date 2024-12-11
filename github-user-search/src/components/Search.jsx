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
      // Only set user data if the data is successfully fetched
      setUserData({
        avatar_url: data.avatar_url, 
        login: data.login,
      });
    } else {
      setError("Looks like we cant find the user");
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
        <button 
          type="submit" 
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering for loading, error, and user data */}
      {setLoading && <p className="text-gray-500">Loading...</p>}
      {setError && <p className="text-red-500">{setError}</p>}

      {setUserData && !setLoading && !setError && (
        <div className="user-info mt-4">
          {/* Display the user's avatar and login */}
          <img
            src={setUserData.avatar_url}
            alt={setUserData.login}
            className="w-24 h-24 rounded-full border-2 border-gray-300 mx-auto"
          />
          <p className="text-xl font-semibold mt-2">{setUserData.login}</p>
        </div>
      )}
    </div>
  );
}

export default Search;