import { GlowingStarsDescription } from "./ui/glowing-stars";

export default function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  return (
    <div className="space-y-2">
      <h3
        className={`text-lg font-semibold ${
          task.isCompleted ? "text-gray-400 line-through" : "text-white"
        }`}
      >
        {task.name}
      </h3>
      <GlowingStarsDescription>{task.description}</GlowingStarsDescription>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            task.isCompleted
              ? "bg-[hsla(0,0%,100%,.1)] text-gray-400 hover:bg-[hsla(0,0%,100%,.2)]"
              : "bg-[hsla(0,0%,100%,.1)] text-white hover:bg-[hsla(0,0%,100%,.2)]"
          } transition-colors`}
        >
          {task.isCompleted ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 rounded-md text-sm font-medium bg-[hsla(0,0%,100%,.1)] text-white hover:bg-[hsla(0,0%,100%,.2)] transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 rounded-md text-sm font-medium bg-[hsla(0,0%,100%,.1)] text-white hover:bg-[hsla(0,0%,100%,.2)] transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
