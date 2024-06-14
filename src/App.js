import React from 'react';
import Calculator from './calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Range slider calculator</h1>        
      </header>
      <main>
        <div className="calculator-container">
          <Calculator />
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <p>Let's Talk</p>
          <p>Have an Idea?</p>
          <a href="mailto:contact@yourcompany.com">info@cinchhomebuyers.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
