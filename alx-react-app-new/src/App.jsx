import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Welcome message */}
      <WelcomeMessage />

      {/* User Profiles */}
      <div>
        <UserProfile name="John Doe" age={30} bio="Avid traveler and photographer." />
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      </div>

      {/* Main content */}
      <MainContent />

      {/* Counter App */}
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Counter App</h1>
      <Counter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
