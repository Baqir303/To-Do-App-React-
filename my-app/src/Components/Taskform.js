import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
  const [title, setTitle] = useState('');

  const styles = {
    form: {
      padding: '20px',
      width: '30%'
    },
    heading: {
      marginBottom: '20px'
    },
    input: {
      marginBottom: '10px',
      padding: '5px 10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
      width: 'calc(100% - 20px)',
      boxSizing: 'border-box'
    },
    button: {
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      background: '#3498db',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer'
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost/To-Do_Backend/add_task.php', { title });
      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div style={styles.form}>
      <h2 style={styles.heading}>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
