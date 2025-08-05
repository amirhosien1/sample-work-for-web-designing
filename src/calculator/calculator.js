import "./calculator.css";
import Displayer from "./displayer";
import { Button, ChangeDisplayBtn } from "./Button";
import { useState } from "react";
import { useEffect } from "react";
function Calculator(){
    const [operations, setOperations] = useState("");
    return (
        <main className="pt-5 align-items-start">
            <section class="cal-container">
                <Displayer operations={operations} setOperations={setOperations}></Displayer>
                <div className="buttons">
                    <Button className="button-top-left" number={"1"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"2"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"3"} operations={operations} setOperations={setOperations}></Button>
                    <ChangeDisplayBtn className="button-top-right" setOperations={setOperations} operations={operations} changeMod="delete-one"></ChangeDisplayBtn>
                    <Button number={"4"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"5"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"6"} operations={operations} setOperations={setOperations}></Button>
                    <ChangeDisplayBtn operations={operations} setOperations={setOperations} changeMod={"delete-all"}></ChangeDisplayBtn>
                    <Button number={"7"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"8"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"9"} operations={operations} setOperations={setOperations}></Button>
                    <Button className="button-bottom-left" number={"*"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"+"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"-"} operations={operations} setOperations={setOperations}></Button>
                    <Button number={"/"} operations={operations} setOperations={setOperations}></Button>
                    <ChangeDisplayBtn className="button-bottom-right" changeMod="result" operations={operations} setOperations={setOperations}></ChangeDisplayBtn>
                    
                </div>
            </section>
        </main>
    )
}

export default Calculator