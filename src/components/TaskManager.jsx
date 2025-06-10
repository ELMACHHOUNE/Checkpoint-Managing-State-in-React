import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

export default function TaskManager({
  tasks,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onToggleComplete,
  editingTask,
  setEditingTask,
}) {
  return (
    <>
      <GlowingStarsBackgroundCard className="mb-8">
        <GlowingStarsTitle>Add New Task</GlowingStarsTitle>
        <TaskForm
          onAddTask={onAddTask}
          onUpdateTask={onUpdateTask}
          editingTask={editingTask}
        />
      </GlowingStarsBackgroundCard>
      <div className="grid gap-4">
        {tasks.length === 0 ? (
          <GlowingStarsBackgroundCard>
            <div className="text-center text-gray-300 py-4">
              No tasks yet. Add one above!
            </div>
          </GlowingStarsBackgroundCard>
        ) : (
          tasks.map((task) => (
            <GlowingStarsBackgroundCard key={task.id}>
              <TaskItem
                task={task}
                onEdit={setEditingTask}
                onDelete={onDeleteTask}
                onToggleComplete={onToggleComplete}
              />
            </GlowingStarsBackgroundCard>
          ))
        )}
      </div>
    </>
  );
}
