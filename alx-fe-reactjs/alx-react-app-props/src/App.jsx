import React, { createContext } from 'react';
import ProfilePage from './ProfilePage';

// 1️⃣ Create the context
export const UserContext = createContext();

function App() {
  // 2️⃣ Define the data you want to share
  const userData = {
    name: 'James Johnson',
    email: 'james.johnson@example.com',
  };

  return (
    // 3️⃣ Provide the context value to children
    <UserContext.Provider value={userData}>
      <div>
        <h1>Profile Page</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
