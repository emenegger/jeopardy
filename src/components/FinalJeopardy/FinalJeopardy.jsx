import { fetchFinalJeopardy } from "../../api/categories";
import styles from "./FinalJeopardy.module.scss";
import { useQuery } from "react-query";
import { useState } from "react";
import FinalJeopardyQuestion from "./FinalJeopardyQuestion";
import FinalJeopardyCategory from "./FinalJeopardyCategory";

const FinalJeopardy = () => {
  const [readyForQuestion, setReadyForQuestion] = useState(false);
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
        />
      );
    if (isLoading) return <h1>... is loading</h1>;
    if (error) return <h1>error</h1>;
    if (readyForQuestion) return <FinalJeopardyQuestion data={data}/>;
  }

  return (
    <div className={styles.container}>
      {render()}
    </div>
  )
};

export default FinalJeopardy;
