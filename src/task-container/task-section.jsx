import TaskContent from "./task-content";

function TaskSection({ tasks = [], onDelete }) {
  if (!tasks.length) {
    return (
      <p className="text-slate-400 text-sm">
        No tasks yet. Create your first task 🚀
      </p>
    );
  }
  return (
    <div className="col-span-8 flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskContent
          key={task.id ?? task._id ?? `${task.taskName}-${task.dueDate}`}
          id={task.id}
          taskName={task.taskName}
          taskDescription={task.taskDescription}
          // dueDate={task.dueDate}
          startTime={task.startTime}
          endTime={task.endTime}
          priority={task.priority}
          project={task.project}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskSection;
