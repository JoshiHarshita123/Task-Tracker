import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange, counts }) => {
  const getButtonStyle = (filterName) => ({
    marginRight: '10px',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: currentFilter === filterName ? '#4CAF50' : '#e0e0e0',
    color: currentFilter === filterName ? 'white' : 'black',
    cursor: 'pointer'
  });

  return (
    <div style={{ marginBottom: '20px' }}>
      <button style={getButtonStyle('all')} onClick={() => onFilterChange('all')}>
        All ({counts.all})
      </button>
      <button style={getButtonStyle('completed')} onClick={() => onFilterChange('completed')}>
        Completed ({counts.completed})
      </button>
      <button style={getButtonStyle('pending')} onClick={() => onFilterChange('pending')}>
        Pending ({counts.pending})
      </button>
    </div>
  );
};

export default TaskFilter;
