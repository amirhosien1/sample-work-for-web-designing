import "./TodoApp.css"
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "./TaskContext.js";
import useTodo from "./Todos.js"

function TodoApp() {
  const [task, setTask] = useState({task: "", done: false});

  const [filter, setFilter] = useState(()=>{
    let saved = localStorage.getItem("filter");
    return saved ? saved : "all"
  });

  const { tasks, addTask, toggleDone, deleteTask } = useTodo();

  useEffect(()=>{
    localStorage.setItem('filter', filter)
  }, [filter])


  function keyHandler(e){
    if (e.key === "Enter"){
      if (task.task.trim()){
        addTask(task.task.trim());
        setTask({ task: "", done: false });
      }
    }
  }

  function changeHandler(e){
    setTask({task: e.target.value, done: false})
  }

  return (
    <main class='todo-app'>
      <div className="container">
        <h1>
          To-Do List
        </h1>
        <div className='search-box'>
          <input type='text'
          placeholder="Enter a new task"
          value={task.task}
          onKeyDown={keyHandler}
          onChange={changeHandler}></input>
          <button onClick={(e) => {
            if (task.task.trim()){
              addTask(task.task.trim())
              setTask({task: "", done: false})
            }
            }}>Add</button>
        </div>
        <TaskContext.Provider value={{tasks, toggleDone, deleteTask}}>
          <TaskList filter={filter}></TaskList>
        </TaskContext.Provider>
        <div className="filters">
            <button style={{backgroundColor: filter === "all" ? "#00000028" : "transparent"}} onClick={(e)=> setFilter("all")}>All</button>
            <button style={{backgroundColor: filter === "active" ? "#00000028" : "transparent"}} onClick={(e)=> setFilter("active")}>Active</button>
            <button style={{backgroundColor: filter === "done" ? "#00000028" : "transparent"}} onClick={(e)=> setFilter("done")}>Done</button>
        </div>
      </div>
    </main>
  );
}


export default TodoApp;
