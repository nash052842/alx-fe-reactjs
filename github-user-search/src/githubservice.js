// src/components/SearchBar.jsx
import React, { useState } from "react";
import { getUser } from "../services/githubService";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const data = await getUser(username);
    setUserData(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <p>Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
