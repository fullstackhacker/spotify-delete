import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const login = useCallback(() => {
    window.location.href = '/api/auth/';
  }, []);

  const url = new URL(window.location.href);

  switch (url.pathname) {
    case '/':
      return (
        <div className='App'>
          <button onClick={login}> Login </button>
        </div>
      );
    case '/app':
      return <div>logged in boyyo</div>;
    default:
      return <div>Nothing</div>;
  }
};

export default App;
