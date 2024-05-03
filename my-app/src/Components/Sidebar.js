import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const styles = {
    sidebar: {
      padding: '20px',
      width: '250px',
      height: '100vh',
      background: '#34495e',
      color: '#ecf0f1',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '2px 0px 5px rgba(0,0,0,0.2)'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '24px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: '4px',
      fontSize: '18px',
      transition: 'background-color 0.3s',
      display: 'block',
      marginBottom: '10px'
    },
    linkHover: {
      backgroundColor: '#1abc9c'
    }
  };

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Menu</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/" style={styles.link} onMouseOver={e => e.currentTarget.style.backgroundColor = '#1abc9c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Pending Tasks</Link>
        </li>
        <li>
          <Link to="/add-task" style={styles.link} onMouseOver={e => e.currentTarget.style.backgroundColor = '#1abc9c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Add Task</Link>
        </li>
        <li>
          <Link to="/completed-tasks" style={styles.link} onMouseOver={e => e.currentTarget.style.backgroundColor = '#1abc9c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Completed Tasks</Link>
        </li>
        <li>
          <Link to="/cancelled-tasks" style={styles.link} onMouseOver={e => e.currentTarget.style.backgroundColor = '#1abc9c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Cancelled Tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
