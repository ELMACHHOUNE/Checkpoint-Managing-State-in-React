export default function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 transition-all ${
        task.isCompleted ? "bg-gray-50" : ""
      }`}
    >
      <div className="space-y-2">
        <h3
          className={`text-lg font-semibold ${
            task.isCompleted ? "text-gray-500 line-through" : "text-gray-900"
          }`}
        >
          {task.name}
        </h3>
        <p
          className={`text-gray-600 ${task.isCompleted ? "line-through" : ""}`}
        >
          {task.description}
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            task.isCompleted
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-green-500 text-white hover:bg-green-600"
          } transition-colors`}
        >
          {task.isCompleted ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
