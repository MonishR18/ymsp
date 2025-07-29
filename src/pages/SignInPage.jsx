import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';

export default function SigninModal({ onClose }) {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (!email) {
      alert('Please enter your Email or Mobile number');
      return;
    }
    alert("Dummy OTP sent to " + email);
  };

  return (
    <div className="signin-overlay">
      <div className="signin-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="signin-left">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="login"
            className="signin-image"
          />
        </div>

        <div className="signin-right">
          <input
            type="text"
            placeholder="Enter Email/Mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signin-input"
          />
          <p className="terms">
            By continuing, you agree to Flipkart's{' '}
            <a href="#" className="link">Terms of Use</a> and{' '}
            <a href="#" className="link">Privacy Policy</a>.
          </p>
          <button className="otp-btn" onClick={handleLogin}>Request OTP</button>
          <p className="new-account">
            New to Flipkart?{' '}
            <span
              onClick={() => alert('Dummy account creation flow')}
              className="create-account-link"
            >
              Create an account
            </span>
          </p>
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
