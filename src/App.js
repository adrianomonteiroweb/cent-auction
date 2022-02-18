import React, { useState } from 'react';

import './App.css';

let initialState = {
  smartphone: 0,
  smarttv: 0,
  notebook: 0,
  lastBidOnSmartphone: '',
  lastBidOnSmarttv: '',
  lastBidOnNotebook: '',
};

export default function App() {
  const {
    smartphone,
    smarttv,
    notebook,
  } = initialState;

  // initial state of items
  const [phone, setPhone] = useState(smartphone);
  const [tv, setTv] = useState(smarttv);
  const [note, setNote] = useState(notebook);

  // initial state of last bid.
  const [lastBidOnSmartphone,setLastBidOnSmartphone] = useState('');
  const [lastBidOnSmarttv,setLastBidOnSmarttv] = useState('');
  const [lastBidOnNotebook,setLastBidOnNotebook] = useState('');

  // initial state of buttons
  const [smartphoneButton, setSmartphoneButton] = useState('Dar lance');
  const [smarttvButton, setSmarttvButton] = useState('Dar lance');
  const [notebookButton, setNotebookButton] = useState('Dar lance');

  const [smartphoneDisabled, setSmartphoneDisabled] = useState(false);
  const [smarttvDisabled, setSmarttvDisabled] = useState(false);
  const [notebookDisabled, setNotebookDisabled] = useState(false);

  // initial state of name
  const [name, setName] = useState();

  function handleChange({ target: { value } }) {
    setName(value);
  }

  return (
    <div className="App">
      <h1>Leilão de Centavos</h1>
      Nome: <input type="text" name="name" onChange={ handleChange } />
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
