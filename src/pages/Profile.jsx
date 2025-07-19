import './profile.css';

function Profile() {
  const user = {
    username: 'postgram_user',
    bio: 'Just posting vibes 🌟',
    followers: 123,
    following: 89,
    posts: [
      'https://source.unsplash.com/random/300x200?sig=11',
      'https://source.unsplash.com/random/300x200?sig=12',
      'https://source.unsplash.com/random/300x200?sig=13'
    ]
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>@{user.username}</h2>
        <p>{user.bio}</p>
        <div className="profile-stats">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
        </div>
      </div>

      <h3>User Posts</h3>
      <div className="profile-posts">
        {user.posts.map((url, i) => (
          <img key={i} src={url} alt="User Post" />
        ))}
      </div>
    </div>
  );
}

export default Profile;