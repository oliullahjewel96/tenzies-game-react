import { useState } from "react";
import Die from "./components/Die";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [dice, setDice] = useState(allNewDice());

  const dieElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6) + 1,
      isHeld: false,
      id: uuidv4(),
    };
  }
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        if (die.isHeld) {
          return die;
        } else {
          return generateNewDie();
        }
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function allNewDice() {
    const randomNumberArray = [];
    for (let i = 0; i < 10; i++) {
      randomNumberArray.push(generateNewDie());
    }
    return randomNumberArray;
  }

  return (
    <div className="App">
      <div className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same.Click Each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">{dieElements}</div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </div>
  );
}

export default App;
