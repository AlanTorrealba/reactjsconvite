import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";



const  TaskList = () => {


  const {tasks}= useContext(TaskContext)  



  return (
    <div className="grid grid-cols-4">
      <h1>
       
        {tasks.map((task) => (
            <TaskCard task= {task} />
        ))}
      </h1>
    </div>
  );
};

export default TaskList;
