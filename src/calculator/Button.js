import "./button.css" 


export function Button({className="", number, operations, setOperations}){
    let operationsList = [
        "+", "-", "/", "%", "*"
    ]

    return (
        <button className={className} onClick={
            (e)=>{
                if (!operationsList.includes(number)){
                    setOperations((operations + number).toString())
                }
                else{
                    if (!operationsList.includes(operations[operations.length - 1])){

                        setOperations((operations + number).toString())
                    }
                }
        }
        }>
            {number}
        </button>
    )
}

export function ChangeDisplayBtn({ changeMod, className="", operations, setOperations }){
    let shape;
    let callback;
    if (changeMod === "delete-one"){
        shape = <i class="bi bi-backspace-fill"></i>;
        callback= function(e){
            setOperations(operations.slice(0, -1))
        }
        
    }
    else if (changeMod === "delete-all"){
        shape = "AC"
        callback = function(e){
            setOperations("")

        }
    }
    else if (changeMod === "result"){
        shape = "=";
        callback = function(e){
            setOperations(eval(operations).toString())
        }
    }
    return (
        <button onClick={callback} className={className}>
            {shape}
        </button>
    )
}
