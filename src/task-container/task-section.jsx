import TaskContent from "./task-content";


function TaskSection({ tasks = [] }) {
  return (
    <section className="grid grid-cols-12 gap-6">
      {/* <div className="col-span-8 flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-headline font-bold text-lg tracking-tight px-2">
            Active Tasks
          </h3>
          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant opacity-60">
            Sort by Priority
          </span>
        </div> */}

      {tasks.map((task) => (
        <TaskContent
          key={task.id}
          taskName={task.taskName}
          taskDescription={task.taskDescription}
          dueDate={task.dueDate}
          priority={task.priority}
          project={task.project}
        />
      ))}
      {/* </div> */}
    </section>
  );
}

export default TaskSection;
