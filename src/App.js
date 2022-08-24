import React, {useState} from 'react';
import './App.scss';

import MainText from './components/mainText';

function App() {
  const [text, setText] = useState("Hi, I'm a React App");

  return (
    <div className="App">
      <MainText text= {text} date = "2002"/>     
    </div>
  );
}

export default App;
