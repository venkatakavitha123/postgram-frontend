import { Link } from 'react-router-dom';
import './auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Signup</button>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Signup;