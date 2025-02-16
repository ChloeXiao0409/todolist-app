import "./Task.scss";

const Task = ({ task, onComplete, onDelete, editingTaskId, editedText, setEditedText, startEditing, saveEditedTask, cancelEditing }) => {
    return (
        <div className="task">
            <input className="completed-checkbox" type="checkbox" checked={task.completed} onClick={() => onComplete(task.id)} />
            
            

            {editingTaskId === task.id ? (
                <input 
                    className="edit-input"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") saveEditedTask();
                        if (e.key === "Escape") cancelEditing();
                    }}
                />
            ) : (
                <span className={`task-text ${task.completed ? "completed" : ""}`}>
                    {task.text}
                </span>
            )}

            {editingTaskId === task.id ? (
                <button className="save-btn" onClick={saveEditedTask}>💾Save</button>
            ) : (
                <button className="edit-btn" onClick={() => startEditing(task.id, task.text)}>✏️Edit</button>
            )}

            <button className="deleted-btn" onClick={() => onDelete(task.id)}>❌</button>

        </div>
    );
};

export default Task;