import TaskItem from "./TaskItem";
import "./TaskList.css"
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList({ filter }){

  const { tasks } = useContext(TaskContext);

  return (
    <div className="tasks-list">
        <ul>
            {tasks.filter(
                    (n, i) => {
                        if (filter === "all") return true
                        else if (filter === "active") return !n.done
                        else return n.done
                    }
                    ).map(
                    (n, i) => (
                        <TaskItem key={n.id} task={n} id={n.id}></TaskItem>
                    )
                )
            }
        </ul>
    </div>

  )
}

export default TaskList;