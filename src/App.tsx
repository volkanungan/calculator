import { useState } from 'react';
import Calculator from './components/Calculator';
import './index.css';

function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center from-linen to-mint-cream bg-gradient-to-b">
      <Calculator />
    </main>
  );
}

export default App;
