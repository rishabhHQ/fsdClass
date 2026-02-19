import {useState} from "react"

function Test1() {
    // let fruit = "Mango"
    // function myFunction2() {fruit = "Kiwi"}

    const[fruit, setFruit] = useState("Mango")
    function myFunction2() {setFruit("Kiwi")}

    return (
        <div>
            <p>{fruit} which is imported from new file Test1</p>
            <button onClick={myFunction2}>Click to change</button>
        </div>
    )
}

export default Test1