import UserDetails from './UserDetails';

function App() {
  const user = {
    name: 'james johnson',
    email: 'james.johnson@example.com',
  };

  return (
    <div>
      <h1>User Information</h1>
      <UserDetails userData={user} />
    </div>
  );
}

export default App;
