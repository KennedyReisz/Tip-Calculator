import styles from "../styles/Styles.module.css";

const App = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};

export default App;
