import React, { useState } from 'react';
import './SignupScreen.css'; // Import CSS file for styling

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle input change and fade the placeholder
  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Here you can submit the form data
    // For demo purpose, let's just console log it
    console.log('Form submitted:', { email, password });
    // Reset fields after successful submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Signup</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
            <span className="placeholder">Email</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
            <span className="placeholder">Password</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e, setConfirmPassword)}
            />
            <span className="placeholder">Confirm Password</span>
          </div>
          <button type="SignUp">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;


