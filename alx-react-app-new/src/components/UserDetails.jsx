import { useContext } from 'react';
import UserContext from '../../UserContext';

const UserDetails = () => {
  const userData = useContext(UserContext); // Get data from context

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default UserDetails;
