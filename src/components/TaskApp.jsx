import React, { useState } from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks"
import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [data,setData] = useState([])
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={data}/>
      {/* Add Task */}
      <AddTask data ={data} setData={setData} />
      {/* Tasks */}
      <Tasks data={data} setData={setData} />
    </div>
  );
};

export default TaskApp;
