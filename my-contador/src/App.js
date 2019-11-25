import React from 'react';
import Button from './componentes/Button'
import Contador from './componentes/pagina/Contador'

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
      <Button />
      
    </div>
  );
}

export default App;
