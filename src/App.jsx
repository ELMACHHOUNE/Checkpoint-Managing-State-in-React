import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <Router>
      <TaskProvider>
        <Layout />
      </TaskProvider>
    </Router>
  );
}

export default App;
