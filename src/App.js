import React from 'react';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Leilão de Centavos</h1>
      Nome: <input type="text" name="name" />
      <p></p>
      <div className="flex-container">
        <div>
          <div>Celular</div>
          <div>R${}</div>
          <button>
            {}
          </button>
          <div>{}</div>
        </div>
        <div>
          <div>TV</div>
          <div>R${}</div>
          <button>
            {}
          </button>
          <div>{}</div>
        </div>
        <div>
          <div>Notebook</div>
          <div>R${}</div>
          <button>
            {}
          </button>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
}
