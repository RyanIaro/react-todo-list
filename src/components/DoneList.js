import React, { useState } from "react";
import { todoObject } from "./TodoList";

export function DoneList() {

    const [description, setDescription] = useState(todoObject.description);
    const [isDone, setIsDone] = useState(todoObject.isDone);

    return(
        <>
            <div className="list">
                <div className="title">
                    <h2>DONE</h2>
                </div>
                {isDone ? (
                    <div className="todo">
                        <p>-{description}</p>
                        <input 
                        type={"checkbox"} 
                        checked
                        onChange={()=> setIsDone(false)}></input>
                    </div>
                ):(
                <div className="todo">
                    <p>Nothing yet</p>
                </div>)}
            </div>
        </>
    );
}