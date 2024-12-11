import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUserData, setLoading, setError }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) {
      return;
    }

    setLoading(true);
    setError(""); // Reset the error message
    setUserData(null); // Clear previous user data

    const data = await fetchUserData(username, location, minRepos);
    
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
    setLocation(""); // Reset the location field
    setMinRepos(0); // Reset min repos field
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
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border rounded-md mt-2"
          placeholder="Location (optional)"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="px-4 py-2 border rounded-md mt-2"
          placeholder="Min Repositories"
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
          {/* Display the user's avatar, login and additional info  */}
          <img
            src={setUserData.avatar_url}
            alt={setUserData.login}
            className="w-24 h-24 rounded-full border-2 border-gray-300 mx-auto"
          />
          <p className="text-xl font-semibold mt-2">{setUserData.login}</p>
          <p className="text-gray-500">Location: {setUserData.location}</p>
          <p className="text-gray-500">Repositories: {setUserData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Search;