import React from 'react';
import './TaskItem.css';

function TaskItem({
  task,
  isEditing,
  editTitle,
  editDescription,
  editPriority,
  editDueDate,
  onEditTitleChange,
  onEditDescriptionChange,
  onEditPriorityChange,
  onEditDueDateChange,
  onToggle,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onDelete,
  isNew
}) {
  const taskClass = `task-item ${task.completed ? 'completed' : 'pending'} ${isNew ? 'highlight' : ''}`;

  return (
    <div className={taskClass}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <div className="task-edit-fields">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => onEditTitleChange(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => onEditDescriptionChange(e.target.value)}
            placeholder="Description"
          />
          <select value={editPriority} onChange={(e) => onEditPriorityChange(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => onEditDueDateChange(e.target.value)}
          />
          <button onClick={() => onSaveEdit(task.id)}>💾 Save</button>
          <button onClick={onCancelEdit}>❌ Cancel</button>
        </div>
      ) : (
        <div className="task-info">
          <strong>{task.title}</strong>
          {task.description && <p>{task.description}</p>}
          <p><b>Priority:</b> {task.priority || 'Not set'}</p>
          <p><b>Due Date:</b> {task.dueDate || 'N/A'}</p>
          <p><small>
            Created: {new Date(task.createdAt).toLocaleString()}<br />
            Status: {task.completed ? '✅ Completed' : '⏳ Pending'}
          </small></p>
          <button onClick={() => onStartEdit(task)} style={{ backgroundColor: '#ffe066' }}>
            ✏️ Edit
          </button>
          <button onClick={() => onDelete(task.id)} className="delete-btn">🗑️ Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
