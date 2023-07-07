import { fetchFinalJeopardy } from "../../api/categories";
import styles from "./FinalJeopardy.module.scss";
import { useQuery } from "react-query";
import FinalJeopardyCategory from "./FinalJeopardyCategory";

const FinalJeopardy = () => {
  // const [finalClue, setFinalClue] = useState({})

  const { isLoading, error, data } = useQuery({
    queryKey: "fetchFinalJeoparydy",
    queryFn: fetchFinalJeopardy,
    enabled: false,
  });
  console.log(isLoading, error, data)
  // const {category, answer, airdate, question} = data;
  return (
    <FinalJeopardyCategory />
  )
//   return (
//     <div className={styles.container}>
//       {!data ? (
//         <h1>loading</h1>
//       ) : (
//         <div className={styles.clueHeaderWrapper}>
//           <div className={styles.header}>{data?.category?.title}</div>
//           <div className={styles.clue}>{data?.question}</div>{" "}
//         </div>
//       )}
//     </div>
//   );
// };
  }

export default FinalJeopardy;
