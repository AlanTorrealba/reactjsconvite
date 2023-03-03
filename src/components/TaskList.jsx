import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";



const  TaskList = () => {


  const {tasks}= useContext(TaskContext)  



  return (
    <div>
      <h1>
       
        {tasks.map((task) => (
            <TaskCard task= {task} />
        ))}
      </h1>
    </div>
  );
};

export default TaskList;
