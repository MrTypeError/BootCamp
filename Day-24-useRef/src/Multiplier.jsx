import React, { useState} from "react";

const Multiplier = () =>{
    const [count, setCounter] = useState(0);

    return(
        <React.Fragment>
            <p>This is a new Product : {count}</p>
            <button onClick={() => setCounter(count * 4)}> Click Me To Multiply </button>
            <button onClick={() => setCounter(count / 4)}> Click Me To Divide </button>
        </React.Fragment>
    );
};

export default Multiplier;