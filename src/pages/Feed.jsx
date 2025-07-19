import { useState } from 'react';
import './feed.css';

function Feed() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(10);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const addComment = () => {
    if (commentText.trim() === '') return;
    setComments([...comments, commentText]);
    setCommentText('');
  };

  return (
    <div className="feed-container">
      <div className="post-card">
        <div className="post-header">
          <strong>@username</strong>
        </div>
        <img
          src="https://via.placeholder.com/400x300"
          alt="Post"
          className="post-image"
        />
        <div className="post-actions">
          <button onClick={toggleLike}>{liked ? '💖' : '🤍'} {likes}</button>
        </div>
        <div className="comments-section">
          <div className="comments-list">
            {comments.map((c, i) => (
              <p key={i}><strong>User:</strong> {c}</p>
            ))}
          </div>
          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={addComment}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;