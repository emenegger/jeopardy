import { fetchFinalJeopardy } from "../../api/categories";
import styles from "./FinalJeopardy.module.scss";
import { useQuery } from "react-query";
import { useState } from "react";
import FinalJeopardyQuestion from "./FinalJeopardyQuestion";
import FinalJeopardyCategory from "./FinalJeopardyCategory";
import { addPlayer } from "../Players/playersSlice";
import { useDispatch, useSelector } from "react-redux";

const FinalJeopardy = () => {
  const [readyForQuestion, setReadyForQuestion] = useState(false);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  // test data so you don't have to start the whole app over when testing
  const test = [
    { name: "Evan", points: 300, id: 1 },
    { name: "Kiki", points: 700, id: 2 },
    { name: "John", points: 700, id: 3 },
  ];
  if (players.length === 0 && !players.includes(test[0])) {
    dispatch(addPlayer(test[0]));
    dispatch(addPlayer(test[1]));
  }
   const initState = Array(Number(players.length)).fill("");
  const [bids, setBids] = useState(initState);

  const { isLoading, error, data } = useQuery({
    queryKey: "fetchFinalJeoparydy",
    queryFn: fetchFinalJeopardy,
    // enabled: false,
  });
  console.log(isLoading, error, data);

  const render = () => {
    if (data && !readyForQuestion)
      return (
        <FinalJeopardyCategory
          data={data}
          setReadyForQuestion={setReadyForQuestion}
          setBids={setBids}
          bids={bids}
        />
      );
    if (isLoading) return <h1>... is loading</h1>;
    if (error) return <h1>error</h1>;
    if (readyForQuestion) return <FinalJeopardyQuestion data={data} bids={bids}/>;
  }

  return (
    <div className={styles.container}>
      {render()}
    </div>
  )
};

export default FinalJeopardy;
