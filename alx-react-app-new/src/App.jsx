
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';


function App() {
  return (
    <div>
      <h1>User Profile Example</h1>
      <WelcomeMessage />
      <UserProfile name="John Doe" age={30} bio="Avid traveler and photographer." />
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <h1 style={{ textAlign: 'center' }}>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;

