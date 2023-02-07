const DoneListSection = (props) => {

    const { title, done } = props;

    return (
        <div className="done">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div>
                {done.map((todo) => (
                <div className="response">
                    <div className="done-elt" key={todo}>
                        {todo}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default DoneListSection;