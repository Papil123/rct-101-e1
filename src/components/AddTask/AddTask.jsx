import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  
  const [task,setTask] = useState("")
  const handleAdd = ()=>{
    // console.log(task)
   if(task!==""){
    props.setData([...props.data,task])
    console.log(props.data)
    setTask("")
   }
  
   
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" className="input" value={task} onChange={(e)=>setTask(e.target.value)} type="text"  placeholder="Add task.." />
      <button data-cy="add-task-button" onClick={handleAdd}  > + </button>
    </div>
  );
};

export default AddTask;
