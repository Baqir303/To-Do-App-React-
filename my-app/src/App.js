import React from 'react';
import Sidebar from './Components/Sidebar';
import TaskForm from './Components/Taskform';
import TaskList from './Components/TaskList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/completed-tasks" element={<TaskList status="completed" />} />
          <Route path="/cancelled-tasks" element={<TaskList status="cancelled" />} />
          <Route path="/" element={<TaskList status="pending" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
