import './follow.css';

function FollowPage() {
  const followers = ['alice123', 'bob_ig', 'charlie_dev'];
  const following = ['dan_coder', 'eve_snap', 'frank_art'];

  return (
    <div className="follow-container">
      <h2>Followers & Following</h2>

      <div className="follow-section">
        <h3>Followers</h3>
        {followers.map((user, index) => (
          <div className="follow-card" key={index}>
            <span>@{user}</span>
            <button>Follow Back</button>
          </div>
        ))}
      </div>

      <div className="follow-section">
        <h3>Following</h3>
        {following.map((user, index) => (
          <div className="follow-card" key={index}>
            <span>@{user}</span>
            <button className="unfollow-btn">Unfollow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowPage;