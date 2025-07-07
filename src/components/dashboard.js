import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';

function Dashboard() {
  const [username, setUsername] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPriority, setEditPriority] = useState('Medium');
  const [editDueDate, setEditDueDate] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [lastAddedId, setLastAddedId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) setUsername(storedUser);

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = ({ title, description, priority, dueDate }) => {
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);
    setLastAddedId(newTask.id);
  };

  const toggleCompletion = (taskId) => {
    const updated = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updated = tasks.filter(task => task.id !== taskId);
      setTasks(updated);
    }
  };

  const startEditing = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setEditPriority(task.priority || 'Medium');
    setEditDueDate(task.dueDate || '');
  };

  const saveEdit = (taskId) => {
    const updated = tasks.map(task =>
      task.id === taskId
        ? { ...task, title: editTitle, description: editDescription, priority: editPriority, dueDate: editDueDate }
        : task
    );
    setTasks(updated);
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    })
    .filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  const count = {
    all: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        background: 'linear-gradient(to right, #f5f5f5, #fafafa)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center' }}>Welcome, {username}</h2>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Add a New Task</h3>

        <TaskForm onAdd={handleAddTask} />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            margin: '20px 0',
            padding: '10px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={count}
        />

        <TaskList
          tasks={filteredTasks}
          editId={editId}
          editTitle={editTitle}
          editDescription={editDescription}
          editPriority={editPriority}
          editDueDate={editDueDate}
          onEditTitleChange={setEditTitle}
          onEditDescriptionChange={setEditDescription}
          onEditPriorityChange={setEditPriority}
          onEditDueDateChange={setEditDueDate}
          onToggle={toggleCompletion}
          onStartEdit={startEditing}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
          onDelete={deleteTask}
          lastAddedId={lastAddedId}
        />
      </div>
    </div>
  );
}

export default Dashboard;
