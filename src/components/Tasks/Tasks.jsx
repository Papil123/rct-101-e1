import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}{props.data.map((task)=><Task task={task} data={props.data} setData={props.setData} />)}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
