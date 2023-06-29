import React from "react";

const Wager = ({ handleSubmitWager, setWager, wager }) => {
  return (
    <div>
      <h1>What would you like to wager?</h1>
      <form>
        <input
          type="text"
          value={wager}
          onChange={(e) => setWager(Number(e.target.value))}
        ></input>
      </form>
      <button onClick={handleSubmitWager}>submit</button>
    </div>
  );
};

export default Wager;
