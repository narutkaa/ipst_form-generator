import React, { useState } from 'react';
import './App.css';

import form1 from './data/form-test-1.json';
import form2 from './data/form-test-2.json';
import form3 from './data/form-test-3.json';
import FormGenerator from './components/FormGenerator';

function App() {
  const [currentForm, setCurrentForm] = useState(form1);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Form Generator</span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentForm(form1)}>Form 1</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentForm(form2)}>Form 2</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentForm(form3)}>Form 3</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <FormGenerator formData={currentForm} />
    </div>
  );
}

export default App;
