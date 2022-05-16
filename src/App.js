import React, {useState} from "react";
import './App.css';
import Iframe from "./componnets/Iframe";

function App() {
  const [count, setCount] = useState(0);
  const [collapsedState, setCollapsedState] = useState(true);

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    if(count >= 1) {
      setCount(count-1);
    }
  }

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        Embeder is <b>{collapsedState ? "collapsed" : 'not collapsed'}</b> right now.
      </div>
      <Iframe
        src="https://embed-dev.vortic.io/#e=4452"
        setCollapsedState={setCollapsedState}
      />
    </div>
  );
}

export default App;
