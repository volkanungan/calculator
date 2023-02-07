import { useState } from 'react';
import Calculator from './components/Calculator';
import Login from './components/Login';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  return (
    <main className="w-screen h-screen flex pt-5 sm:items-center justify-center from-linen to-mint-cream bg-gradient-to-b">
      <div className="w-11/12 max-w-4xl min-h-4/6 max-h-96 bg-mint-cream p-10 rounded-lg shadow-md">
        {loggedIn ? (
          <Calculator />
        ) : (
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        )}
      </div>
    </main>
  );
}

export default App;
