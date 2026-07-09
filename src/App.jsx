import { useState } from "react";
import GithubCard from "./components/GithubCard";
import "./App.css";

function App() {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getProfile() {

    if (!username) return;

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("GitHub user not found");
      }

      const data = await response.json();

      setProfile(data);

    }
    catch (error) {

      setError(error.message);
      setProfile(null);

    }
    finally {

      setLoading(false);

    }

  }

  return (

    <div className="app">

      <h1>GitHub Profile Finder</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={getProfile}>
        Search
      </button>

      {
        loading && <h3>Loading...</h3>
      }

      {
        error && <h3>{error}</h3>
      }

      {
        profile &&
        <GithubCard profile={profile} />
      }

    </div>

  );

}

export default App;