const BidForm = ({player}) => {
  return (
    <form>
      <label>Enter {player.name}'s bid: </label>
      <input type="number"></input>
    </form>
  );
};

export default BidForm;
