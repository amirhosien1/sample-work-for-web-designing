import "./TaskItem.css";
import { useContext } from "react";
import { TaskContext } from "./TaskContext.js";

function TaskItem({task, id}){

    const { toggleDone, deleteTask } = useContext(TaskContext);

    return (
    <li key={id}>
        <div className="task-part">
            <div className="text-container">
            <input type="checkbox" className="checkbox" checked={task.done} onChange={(e)=>{toggleDone(id)}}></input>
            <span>{task.task}</span>

            </div>
            <button onClick={(e) => deleteTask(id)} className="delete-box">
            Delete
            </button>
        </div>

        <hr></hr>
    </li>
    )
}

export default TaskItem;