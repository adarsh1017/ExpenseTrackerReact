import React, { useState } from 'react';

const UpdateProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const idToken = 'YOUR_ID_TOKEN'; // Get the user's ID token from Firebase Authentication

    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDzuEJwdCPwjeHNh7lDZ2F55_LoRHxcgBg`, {
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
      });

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

