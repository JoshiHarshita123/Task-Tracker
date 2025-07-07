import React from 'react';
import TaskItem from './TaskItem';



const TaskList = ({
  tasks,
  editId,
  editTitle,
  editDescription,
  onEditTitleChange,
  onEditDescriptionChange,
  onToggle,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onDelete
}) => {
  if (tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={editId === task.id}
          editTitle={editTitle}
          editDescription={editDescription}
          onEditTitleChange={onEditTitleChange}
          onEditDescriptionChange={onEditDescriptionChange}
          onToggle={onToggle}
          onStartEdit={onStartEdit}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
