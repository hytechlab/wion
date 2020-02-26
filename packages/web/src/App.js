import React, { Component, useState } from "react";
import { common } from "@gims/common";

const App =(props) => {
        const [count, setCount] = useState(0)
        return (
            <div className="App">
                <h1> Hello, World! </h1>
        <button onClick={()=>{setCount(count+1)        
                    common.store.main.id = Math.random();
            
        }}>Clicked {count}</button>
                <p>ID = {common.store.main.id * 100}</p>
            </div>
        );
    }


export default App;