const TodoListSection = (props) => {

    const {
        title,
        inputValues,
        description,
        onInputChange,
        onEnterPress,
        handleCheck,
    } = props;
    
    return (
        <div className="todo">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div>
                <input
                className="input"
                type="text"
                placeholder="Create a todo..."
                value={description}
                onChange={onInputChange}
                onKeyDown={onEnterPress}
                />
                <div>
                    {inputValues.map((todo, index) => (
                    <div className="response">
                        <span className="element" key={todo}>
                            {todo}
                        </span>
                        <div className="check">
                            <input type="checkbox" onClick={() => handleCheck(index)} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoListSection;