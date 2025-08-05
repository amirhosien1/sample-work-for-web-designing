import { useState, useEffect } from "react";


function useTodo(){
    const [tasks, setTasks] = useState(
        () => JSON.parse(localStorage.getItem("tasks")) || []
    )

    useEffect(
        () => {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        },
        [tasks]
    )
    const addTask = text => setTasks([...tasks, {task: text, id: Date.now(), done: false}]);
    const deleteTask = id => setTasks(
        prev => prev.filter(
            n => n.id !== id
        )
    )
    const toggleDone = id =>setTasks(
        prev =>prev.map(
                (item) =>
                item.id === id ? {...item, done: !item.done} : item
        )
    );

    return {tasks, addTask, deleteTask, toggleDone}
}

export default useTodo;