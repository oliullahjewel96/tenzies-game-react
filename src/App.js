import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  const dieElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} />;
  });

  function rollDice() {
    setDice(allNewDice());
  }

  function allNewDice() {
    const randomNumberArray = [];
    for (let i = 0; i < 10; i++) {
      randomNumberArray.push({
        value: Math.ceil(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return randomNumberArray;
  }

  return (
    <div className="App">
      <div className="main">
        <div className="die-container">{dieElements}</div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </div>
  );
}

export default App;
