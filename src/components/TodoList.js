import React, { useState } from "react";

export let todoObject = {
    "description": null,
    "isReady": null,
    "isDone": null
};


export function TodoList() {

    const [description, setDescription] = useState("");
    const [isReady, setIsReady] = useState(false);
    const [isDone, setIsDone] = useState(false);

    todoObject = {
        "description": description,
        "isReady": isReady,
        "isDone": isDone
    };
    
    return(
        <>
            <div className="list">
                <div className="title">
                    <h2>TODO</h2>
                </div>
                <div className="input">
                    <input 
                        type={"text"} 
                        placeholder="Create a new todo" 
                        onChange={(e)=> setDescription(e.target.value)}
                        onKeyDown={(e)=> {e.key === "Enter" && setIsReady(true)}}
                    ></input>
                </div>
                {isReady ? (
                    <div className="todo">
                        <p>-{description}</p>
                        <input type={"checkbox"} onChange={()=> setIsReady(false) || setIsDone(true)}></input>
                        <span>Done</span>
                    </div>
                ):(<></>)}
            </div>
        </>
    );
}
