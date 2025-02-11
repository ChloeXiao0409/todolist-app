import "./Task.scss";

const Task = ({ task, onComplete, onDelete}) => {
    return (
        <div className="task">
            <span className={`task-text ${task.completed ? "completed" : ""}`}>
                {task.text}
            </span>
            <button className="completed-btn" onClick={() => onComplete(task.id)}>✅</button>
            <button className="deleted-btn" onClick={() => onDelete(task.id)}>❌</button>
        </div>
    );
};

export default Task;