import React from "react";
import Counter from "../Counter/Counter"
import styles from "./task.module.css";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value 
  
  const handleRemove = ()=>{
  props.data.remove(props.task)
    props.setData(props.data)
    //  props.setData([ ...props.data-props.task ])
  }
  const handleCheck = ()=>{
     
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" checked={handleCheck} data-cy="task-checkbox" />
      <div data-cy="task-text">{props.task}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={handleRemove} ></button>
    </li>
  );
};

export default Task;
