// ProfileCompletion.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCompletion = () => {
  return (
    <div>
      <h2>Welcome to Expense Tracker</h2>
      <p>Your profile is incomplete.</p>
      <Link to="/update-profile">Update Profile</Link>
    </div>
  );
};

export default ProfileCompletion;


