import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onEdit,
  onDelete,
  onToggleComplete,
}) {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-4">
          No tasks yet. Add one above!
        </p>
      ) : (
        <div className="grid gap-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
