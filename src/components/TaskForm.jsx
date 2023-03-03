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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe aqui"
          onChange={(e) => {
            setTitle(e.target.value);
          }} value={title}
        />
        <br />
        <textarea
          type="text"
          placeholder="Escribe aqui"
          onChange={(e) => {
            setDescription(e.target.value);
          }}value={description}
        />
        <br />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
