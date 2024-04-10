
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom'; // Import Link from react-router-dom
  import firebase from 'firebase/compat/app'; // Import Firebase app compat module
  import 'firebase/compat/auth'; // Import Firebase auth compat module
  import './SignupScreen.css'; // Import CSS file for styling
  import ProfileCompletion from './ProfileCompletion'; // Import ProfileCompletion component
  
  // Initialize Firebase with your configuration 
  const firebaseConfig = {
    apiKey: "AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg",
    authDomain: "expense-tracker-15059.firebaseapp.com",
    projectId: "expense-tracker-15059",
    storageBucket: "expense-tracker-15059.appspot.com",
    messagingSenderId: "984497806329",
    appId: "1:984497806329:web:60df7797060a6608f47b28",
    measurementId: "G-BLVLLE95FH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const [profileIncomplete, setProfileIncomplete] = useState(false); // State to track profile completion
  
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
  
        // Create user with email and password
        await firebase.auth().createUserWithEmailAndPassword(email, password);
  
        // Reset fields after successful registration
        setEmail('');
        setPassword('');
        setConfirmPassword('');
  
        console.log('User has successfully signed up.'); // Logging successful registration
  
        // Update state to indicate successful signup
        setLoggedIn(true);
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div className="container">
        <div className="signup-box">
          {!loggedIn ? (
            <>
              <h2>{'Signup'}</h2>
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
              <p>Already a user? <Link to="/login">Login</Link></p> {/* Use Link from react-router-dom */}
            </>
          ) : (
            <>
              {profileIncomplete ? (
                <ProfileCompletion onUpdateProfile={() => setProfileIncomplete(false)} />
              ) : (
                <h2>Login</h2>
              )}
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default SignupScreen;
  
