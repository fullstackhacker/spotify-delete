import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const login = useCallback(() => {
    window.location.href = '/api/auth/';
  }, []);

  return (
    <div className='App'>
      <button onClick={login}> Login </button>
    </div>
  );
};

export default App;
