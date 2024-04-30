import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList({ status }) {
  const [tasks, setTasks] = useState([]);

  const styles = {
    container: {
      padding: '20px',
      width: '80%'
    },
    heading: {
      marginBottom: '20px'
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px'
    },
    taskTitle: {
      flexGrow: '1',
      marginRight: '10px'
    },
    button: {
      padding: '5px 10px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer'
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [status]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost/To-Do_Backend/get_tasks.php?status=${status}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleUpdateTask = async (id, newStatus) => {
    try {
      await axios.post('http://localhost/To-Do_Backend/update_task.php', { id, status: newStatus });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
        await axios.delete('http://localhost/To-Do_Backend/delete_task.php', { data: { id } });
        fetchTasks(); 
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{status.charAt(0).toUpperCase() + status.slice(1)} Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={styles.listItem}>
            <span style={styles.taskTitle}>{task.title}</span>
            {status === 'completed' || status === 'cancelled' ? (
              <button
                style={{ ...styles.button,':hover':{  backgroundColor: 'red' }}}
                onClick={() => handleDeleteTask(task.id)}
              >
                ✕
              </button>
            ) : (
              <React.Fragment>
                <button
                  style={{ ...styles.button, ':hover':{ backgroundColor: 'green'} }}
                  onClick={() => handleUpdateTask(task.id, 'completed')}
                >
                  ✓
                </button>
                <button
                  style={{ ...styles.button,':hover':{  backgroundColor: 'red' }}}
                  onClick={() => handleUpdateTask(task.id, 'cancelled')}
                >
                  ✕
                </button>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
