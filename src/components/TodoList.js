import { useState } from "react";
import "../App.css"
import TodoListSection from "./TodoListSection";
import DoneListSection from "./DoneListSection.js";

function TodoList() {

    const [description, setDescription] = useState("");
    const [inputValues, setInputValues] = useState([]);
    const [done, setDone] = useState([]);

    const onInputChange = (event) => {
        setDescription(event.target.value);
    };

    const onEnterPress = (event) => {
        if (event.key === "Enter") {
            setInputValues([...inputValues, description]);
            setDescription("");
        }
    };

    const handleCheck = (index) => {
        const doneItem = inputValues[index];
        const newTodos = inputValues.filter((elt, i) => i !== index);
        setDone([...done, doneItem]);
        setInputValues(newTodos);
    };

    return (
        <>
            <div className="list">
                <TodoListSection
                title="Todo"
                inputValues={inputValues}
                description={description}
                onInputChange={onInputChange}
                onEnterPress={onEnterPress}
                handleCheck={handleCheck}
                />
            </div>
            <div className="list">
                <DoneListSection title="Done" done={done} />
            </div>
        </>
    );
}

export default TodoList;