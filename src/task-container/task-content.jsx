function TaskContent({
  taskName,
  taskDescription,
  dueDate,
  priority,
  project,
}) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between group hover:bg-surface-container-high transition-all duration-300 shadow-[0_12px_40px_rgba(25,28,30,0.03)] cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-tertiary-container text-on-tertiary-container">
          <span className="material-symbols-outlined">priority_high</span>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface">
            {taskName}
          </h4>
          <p className="text-sm text-on-surface-variant font-body">
            {/* Due in 2 hours • Workspace Phase 2 */}
            {dueDate} • {taskDescription}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-tertiary-container text-on-tertiary-container">
          {priority}
        </span>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
          chevron_right
        </span>
      </div>
    </div>
  );
}

export default TaskContent;
