// Import's
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

// Asset's
import styles from "../styles/Styles.module.css";

const App = () => {
  const [billInput, setBillInput] = useState();
  const [peopleInput, setPeopleInput] = useState();
  const [customInput, setCustomInput] = useState();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.billArea}>
            <h2>Bill</h2>

            <div className={styles.billInput}>
              <p>$</p>
              <input type="number" placeholder="142.55" />
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
              <input type="number" placeholder="4" />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.result}>
            <div className={styles.topArea}>
              <div className={styles.tipAmount}>
                <div className={styles.texts}>
                  <h4>Tip Amount</h4>
                  <p>/ person</p>
                </div>

                <h1>$4.27</h1>
              </div>
              <div className={styles.total}>
                <div className={styles.texts}>
                  <h4>Total</h4>
                  <p>/ person</p>
                </div>

                <h1>$32.79</h1>
              </div>
            </div>
            <div className={styles.bottomArea}>
              <button className={styles.resetButton}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
