import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTasks} = useContext(TaskContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();

    createTasks({ title, description });

    setTitle('')
    setDescription('')


  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4  ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          type="text"
          placeholder="Escribe aqui"
          onChange={(e) => {
            setTitle(e.target.value);
          }} value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        
        <textarea
         className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe aqui"
          onChange={(e) => {
            setDescription(e.target.value);
          }}value={description}
          
        />
        
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div> 
  );
}

export default TaskForm;
