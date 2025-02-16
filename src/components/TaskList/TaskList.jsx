import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = ({tasks, setTasks, editingTaskId, editedText, setEditedText, startEditing, saveEditedTask, cancelEditing }) => {
    // tasks -> objects -> [{id: 1, text: "Task 1", completed: false}]
    // setTasks -> function to state updating, comes from useState in App.js
    const completeTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    } 

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }    

    return (
        <div className="task-list">
            {
                tasks.map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onComplete={completeTask} 
                        onDelete={deleteTask}
                        editingTaskId={editingTaskId}
                        editedText={editedText}
                        setEditedText={setEditedText}
                        startEditing={startEditing}
                        saveEditedTask={saveEditedTask}
                        cancelEditing={cancelEditing} 
                    />
                ))
            }
        </div>
    )
}

export default TaskList;