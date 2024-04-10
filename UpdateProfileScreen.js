import React, { useState, useEffect } from 'react';

const UpdateProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');

  // Fetch user profile data from Firebase when component mounts
  useEffect(() => {
    // Function to fetch user profile data
    const fetchUserProfile = async () => {
      const idToken = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg'; // Get the user's ID token from Firebase Authentication

      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idToken: idToken,
              returnSecureToken: true,
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        // Parse the response JSON
        const data = await response.json();

        // Set state with user profile data
        setFullName(data.displayName || '');
        setPhotoURL(data.photoURL || '');
      } catch (error) {
        setError(error.message);
      }
    };

    // Call the fetchUserProfile function
    fetchUserProfile();
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const idToken = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg'; // Get the user's ID token from Firebase Authentication

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idToken: idToken,
            displayName: fullName,
            photoUrl: photoURL,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      // Profile updated successfully
      console.log('Profile updated successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div>
          <label>Photo URL:</label>
          <input type="text" value={photoURL} onChange={handlePhotoURLChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfileScreen;
