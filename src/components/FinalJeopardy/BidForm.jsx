const BidForm = ({ player, i, setBids, bids }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setBids([...bids.slice(0, i), Number(e.target.value), ...bids.slice(i + 1)]);
    console.log(bids);
  };

  return (
    <form>
      <label>{player.name}'s bid: </label>
      <input type="number" value={bids[i]} onChange={handleChange}></input>
    </form>
  );
};

export default BidForm;
