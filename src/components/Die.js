const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div onClick={props.holdDice} style={styles} className="die-face">
      <h2>{props.value}</h2>
    </div>
  );
};

export default Die;
