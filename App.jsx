import UserProfile from './UserProfile';
import UserContext from './UserContext';

function App() {
  const user = {
    name: "Jane Doe",
    age: 28,
    bio: "Frontend developer and React enthusiast"
  };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
