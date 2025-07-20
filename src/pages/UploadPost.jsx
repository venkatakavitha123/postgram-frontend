import { useState } from 'react';
import './upload.css';

function UploadPost() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = () => {
    alert('Post uploaded (Frontend only, no backend)');
  };

  return (
    <div className="upload-container">
      <h2>Upload New Post</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="preview" className="preview-img" />}
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handleUpload}>Post</button>
    </div>
  );
}

export default UploadPost;