import "./Task.scss";

const Task = ({ task, onComplete, onDelete}) => {
    return (
        <div className="task">
            <input className="completed-checkbox" type="checkbox" onClick={() => onComplete(task.id)} />
            <span className={`task-text ${task.completed ? "completed" : ""}`}>
                {task.text}
            </span>
            <button className="deleted-btn" onClick={() => onDelete(task.id)}>❌</button>
        </div>
    );
};

export default Task;