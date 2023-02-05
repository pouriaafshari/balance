import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://pooriya007.pythonanywhere.com/');
      const text = await res.text();
      setResponse(text);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            response
          }
        </p>
      </header>
    </div>
  );
}

export default App;
