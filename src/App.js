import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  const dieElements = dice.map((die, index) => {
    return <Die key={die.id} value={die} />;
  });

  function rollDice() {
    setDice(allNewDice());
  }
  function allNewDice() {
    const randomNumberArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6) + 1;
      randomNumberArray.push(randomNumber);
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
