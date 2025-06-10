import Navbar from "./Navbar";
import Footer from "./Footer";
import TaskManager from "../TaskManager";
import { useTask } from "../../context/TaskContext";
import { useLocation } from "react-router-dom";
import { BackgroundLines } from "../ui/background-lines";

export default function Layout() {
  const {
    tasks,
    editingTask,
    setEditingTask,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
  } = useTask();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundLines className="fixed inset-0 w-full h-full" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-4xl mx-auto h-full">
            {isHomePage ? (
              <div className="flex items-center justify-center w-full h-[calc(100vh-12rem)] flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                  Task Manager
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                  Manage your tasks efficiently and stay organized with our
                  intuitive task management system.
                </p>
              </div>
            ) : (
              <TaskManager
                tasks={tasks}
                onAddTask={addTask}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
                onToggleComplete={toggleComplete}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
