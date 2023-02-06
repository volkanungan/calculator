import { useState } from 'react';
import Calculator from './components/Calculator';
import Login from './components/Login';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  return (
    <main className="w-screen h-screen flex items-center justify-center from-linen to-mint-cream bg-gradient-to-b">
      <div className="w-11/12 max-w-4xl h-4/6 bg-mint-cream md:p-10 rounded-lg shadow-md">
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
