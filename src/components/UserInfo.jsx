import ProfilePage from './ProfilePage';

function App() {
  const user = {
     name: 'james johnson',
    email: 'james.johnson@example.com',
  };

  return (
    <div>
      <h1>Profile</h1>
      <ProfilePage userData={user} />
    </div>
  );
}

export default App;
