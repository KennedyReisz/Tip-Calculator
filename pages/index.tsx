// Import's
import { FaUserAlt } from "react-icons/fa";

// Asset's
import styles from "../styles/Styles.module.css";

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.billArea}>
            <h2>Bill</h2>

            <div className={styles.billInput}>
              <p>$</p>
              <input type="number" />
            </div>
          </div>

          <div className={styles.selectTip}>
            <h2>Select Tip %</h2>

            <div className={styles.tipsPct}>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input type="number" placeholder="Custom" />
            </div>
          </div>

          <div className={styles.peopleQuantity}>
            <h2>Number of People</h2>

            <div className={styles.peopleInput}>
              <FaUserAlt color="#acbebc" size={24} />
              <input type="number" />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.result}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
