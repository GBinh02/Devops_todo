function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p style={{ color: '#9ca3af', textAlign: 'center', padding: 32 }}>
        Chưa có công việc nào. Thêm đi! 🎯
      </p>
    )
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li
          key={task.id}
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 16px', marginBottom: 8,
            background: task.done ? '#f0fdf4' : '#fff',
            border: `1px solid ${task.done ? '#86efac' : '#e5e7eb'}`,
            borderRadius: 8,
            transition: 'all 0.2s',
          }}
        >
          <input
            type="checkbox"
            checked={!!task.done}
            onChange={() => onToggle(task.id, task.done)}
            style={{ width: 18, height: 18, cursor: 'pointer', accentColor: '#4f46e5' }}
          />
          <span style={{
            flex: 1, fontSize: 15,
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? '#9ca3af' : '#111827',
          }}>
            {task.title}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', color: '#f87171',
              fontSize: 18, lineHeight: 1,
            }}
            title="Xoá"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList