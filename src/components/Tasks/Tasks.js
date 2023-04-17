import Task from "./Task";
import AddTasks from "./AddTasks";

const Tasks = ({ tasks, onDelete, onToggle, onAdd, showTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
     {showTask && <AddTasks onAdd={onAdd} />}
    </>
  );
};

export default Tasks;
