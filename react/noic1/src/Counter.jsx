import { useState } from 'react';

function Counter() {

    const[count, setCount] = useState(0);

    function counTer() { setCount(count + 1) }
    function counTer2() { setCount(count - 1) }
    function counTer3() { setCount(0) }

    return(
        <div>
            <p>Counter: {count}</p>
            <button onClick={counTer}>Counter update btm</button>
            <button onClick={counTer2}>Counter dec btn</button>
            <button onClick={counTer3}>Counter reset btn</button>
        </div>
    );
}

export default Counter