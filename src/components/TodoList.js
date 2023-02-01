import { useState } from "react";
import "../App.css"

function TodoList() {
  const [description,setDescription]=useState("");
  const [inputValues, setInputValues] = useState([]);
  const [done, setDone] = useState([]);
  
  

  const onInputChange = (event) => {
    setDescription(event.target.value);
  };

  const onEnterPress = (event) => {
    if(event.key === "Enter") {
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
            <div className="todo">
                <div className="title">
                    <h2>Todo</h2>
                </div>
                <div>
                    <input
                        className="input"
                        type="text"
                        placeholder="New to do"
                        value={description}
                        onChange={onInputChange}
                        onKeyDown={onEnterPress}
                    ></input>
                <div>
                    {inputValues.map((todo, index) => (
                        <div className="response" >
                            <span className="element" key={todo}>
                                {todo}
                            </span>
                            <div className="check">
                                <input  type="checkbox" onClick={() => handleCheck(index)} />
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    <div className="list">
        <div className="done">
            <div className="title">
                <h2>Done</h2>
            </div>
        <div>
            {done.map((todo) => (
                <div className="response">
                    <div className="done-elt"  key={todo}>
                        {todo}
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
    </>
  );
}

export default TodoList;