/* eslint-disable react-hooks/exhaustive-deps */

// Import's
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

// Asset's
import styles from "../styles/Styles.module.css";

const App = () => {
  const [billInput, setBillInput] = useState("");
  const [pct, setPct] = useState(0);
  const [customInput, setCustomInput] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [peopleInput, setPeopleInput] = useState<any>("");

  const convertedBill = parseFloat(billInput);
  const convertedPeople = parseFloat(peopleInput);

  const calc = () => {
    if (convertedBill) {
      setTipAmount((pct / 100) * convertedBill);
    }
  };

  useEffect(() => {
    if (customInput) {
      if (convertedBill) {
        setTipAmount((parseFloat(customInput) / 100) * convertedBill);
      }
    } else {
      calc();
    }
  }, [calc, convertedBill]);

  const handleResetAll = () => {
    setBillInput("");
    setPct(0);
    setCustomInput("");
    setTipAmount(0);
    setPeopleInput("");
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.billArea}>
            <h2>Bill</h2>

            <div className={styles.billInput}>
              <p>$</p>
              <input
                type="number"
                placeholder="142.55"
                value={billInput}
                onChange={(e) => setBillInput(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.selectTip}>
            <h2>Select Tip %</h2>

            <div className={styles.tipsPct}>
              <button 
                onClick={() => {setPct(5)}}
                style={pct === 5 ? {backgroundColor: "#30bcab", color: "#afd6d8"} : {}}>5%</button>
              <button 
                onClick={() => {setPct(10)}}
                style={pct === 10 ? {backgroundColor: "#30bcab", color: "#afd6d8"} : {}}>10%</button>
              <button 
                onClick={() => {setPct(15)}}
                style={pct === 15 ? {backgroundColor: "#30bcab", color: "#afd6d8"} : {}}>15%</button>
              <button 
                onClick={() => {setPct(25)}}
                style={pct === 25 ? {backgroundColor: "#30bcab", color: "#afd6d8"} : {}}>25%</button>
              <button 
                onClick={() => {setPct(50)}}
                style={pct === 50 ? {backgroundColor: "#30bcab", color: "#afd6d8"} : {}}>50%</button>

              <input
                type="number"
                placeholder="Custom"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.peopleQuantity}>
            <h2>Number of People</h2>

            <div className={styles.peopleInput}>
              <FaUserAlt color="#acbebc" size={24} />
              <input
                type="number"
                placeholder="4"
                value={peopleInput}
                onChange={(e) => [setPeopleInput(e.target.value)]}
              />
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

                <h1>${tipAmount.toFixed(2)}</h1>
              </div>
              <div className={styles.total}>
                <div className={styles.texts}>
                  <h4>Total</h4>
                  <p>/ person</p>
                </div>

                <h1>${tipAmount && convertedBill ? tipAmount + convertedBill : "0.00"}</h1>
              </div>

              <div className={styles.totalWithPeoples}>
                <div className={styles.texts}>
                  <h4>Divided for each person</h4>
                  <p>/ person</p>
                </div>

                <h1>${peopleInput ? (convertedBill + tipAmount) / convertedPeople : "0.00"}</h1>
              </div>
            </div>
            <div className={styles.bottomArea}>
              <button className={styles.resetButton} onClick={handleResetAll}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
