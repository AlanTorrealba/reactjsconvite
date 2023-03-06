import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {
 
  const {deleteTask} = useContext(TaskContext)

  return (
 
     <div className="bg-gray-800 text-white" >
      <h6>{task.title}</h6>
      <p>{task.description} </p>

      <button onClick={() => deleteTask(task.id)}>Eliminar esta entrada</button>
    </div>
 
  );
}

export default TaskCard;
