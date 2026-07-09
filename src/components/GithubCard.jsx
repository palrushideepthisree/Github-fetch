function GithubCard({ profile }) {

  return (

    <div className="card">

      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="avatar"
      />

      <h2>{profile.name}</h2>

      <p>@{profile.login}</p>

      <p>{profile.bio}</p>

      <p><strong>Followers:</strong> {profile.followers}</p>

      <p><strong>Following:</strong> {profile.following}</p>

      <p><strong>Repositories:</strong> {profile.public_repos}</p>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View GitHub Profile
      </a>

    </div>

  );

}

export default GithubCard;