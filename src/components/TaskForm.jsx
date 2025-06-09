import { useState, useEffect } from "react";

export default function TaskForm({ onAddTask, onUpdateTask, editingTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description) {
      setError("Both fields are required.");
      return;
    }

    const task = {
      id: editingTask ? editingTask.id : Date.now(), // Use existing ID if editing, otherwise generate a new one
      name,
      description,
      isCompleted: editingTask ? editingTask.isCompleted : false, // Default value for new tasks
    };

    editingTask ? onUpdateTask(task) : onAddTask(task);
    setName("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={name}
          placeholder="Task Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        {editingTask ? "Update" : "Add"} Task
      </button>
    </form>
  );
}
