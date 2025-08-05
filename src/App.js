import { Routes, Route } from "react-router-dom";
import TodoApp from './To-do list/TodoApp';
import Calculator from "./calculator/calculator"

export default function App(){
    return (
        <Routes>
            {/* <Route path="/" element={ <About /> } /> */}
            <Route path="/" element={ <TodoApp /> } />
            <Route path="/calculator" element={ <Calculator /> } />
        </Routes>
    )
}