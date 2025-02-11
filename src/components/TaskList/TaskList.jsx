import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = ({tasks, setTasks}) => {
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
                    <Task key={task.id} task={task} onComplete={completeTask} onDelete={deleteTask} />
                ))
            }
        </div>
    )
}

export default TaskList;