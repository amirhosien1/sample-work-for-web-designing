import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Displayer({ operations, setOperations }){

    gsap.fromTo(".waiting", {
        opacity: "100%",
    }, {
        opacity: "15%",
        yoyo: true,
        yoyoEase: "power1.inOut",
        repeat: -1,
        duration: 0.6
    })



    const operationsRef = useRef(null)
    useEffect(()=>{
        let operationsEL = operationsRef.current
        let downgrade1 = gsap.to(operationsEL, {
            fontSize: "large",
            duration: 0.3
        }).pause()

        let downgrade2 = gsap.to(operationsEL,{
                fontSize: "small",
                wordWrap: "break-word",
                duration: 0.3
            }).pause()
        if (operations.length === 31){
            downgrade1.resume()
        }
        else if (operations.length === 41){
            downgrade2.resume()
        }

        else if(operations.length === 40 && operationsEL.style.fontSize === "15px"){
            downgrade2.reverse()
        }

        else if((operations.length === 30 && operationsEL.style.fontSize === "20px") || !operations){
            downgrade1.reverse()
            operationsEL.style.fontSize = "xx-large"
        }
        else if(operations.length === 64){
            setOperations(operations.slice(0, -1))
            alert("You can not enter more than 63 characters")
        }
}, [operations])
    return (
            <div ref={operationsRef} className="displayer">
                <span class='operations'>
                    {operations}
                </span>
                <span className="waiting">
                    |
                </span>
            </div>
    )
}

export default Displayer;