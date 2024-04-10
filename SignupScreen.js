import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './SignupScreen.css';
import ProfileCompletion from './ProfileCompletion'; // Added ProfileCompletion import

const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [profileIncomplete, setProfileIncomplete] = useState(false); // Added profileIncomplete state
                                                               // to track profile completion

  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      await firebase.auth().createUserWithEmailAndPassword(email, password);

      setEmail('');
      setPassword('');
      setConfirmPassword('');

      console.log('User has successfully signed up.');

      setSignedUp(true);
    } catch (error) {
      setError(error.message);
    }
  };

  if (signedUp) {
    window.location.href = '/login'; // Redirect to login page after signup
    return null; // Return null to prevent rendering of signup screen
  }

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Signup</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignup}>
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
          <button type="submit">Signup</button>
        </form>
        <p>Already a user? <Link to="/login">Login</Link></p>
      </div>
      {/* Added ProfileCompletion component */}
      {profileIncomplete && (
        <ProfileCompletion onUpdateProfile={() => setProfileIncomplete(false)} />
      )}
    </div>
  );
};

export default SignupScreen;
