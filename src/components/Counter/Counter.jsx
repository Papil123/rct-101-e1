import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let [count,setCount] = useState(1)
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const handleAdd =()=>{
     setCount(count+1)
  }
  const handleMinus =()=>{
    setCount(count-1)
 }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleMinus} >-</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleAdd} >+</button>
    </div>
  );
};

export default Counter;
