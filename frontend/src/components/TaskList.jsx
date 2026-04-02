export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return (
    <div style={{ textAlign: 'center', padding: '48px 0', color: '#9ca3af' }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>🎯</div>
      <p style={{ fontSize: 15 }}>Không có công việc nào</p>
    </div>
  )

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {tasks.map(task => (
        <li key={task.id} className="task-item" style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '14px 16px',
          background: task.done ? '#f0fdf4' : '#fff',
          border: `1px solid ${task.done ? '#bbf7d0' : '#e5e7eb'}`,
          borderRadius: 10,
          transition: 'all 0.2s',
        }}>
          <input
            type="checkbox"
            checked={!!task.done}
            onChange={() => onToggle(task.id, task.done)}
            style={{ width: 18, height: 18, cursor: 'pointer', accentColor: '#4f46e5', flexShrink: 0 }}
          />
          <span style={{
            flex: 1, fontSize: 15, lineHeight: 1.5,
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? '#9ca3af' : '#111827',
            transition: 'all 0.2s',
          }}>
            {task.title}
          </span>
          {task.done && (
            <span style={{ fontSize: 12, color: '#10b981', fontWeight: 600,
              background: '#dcfce7', padding: '2px 8px', borderRadius: 99 }}>
              ✓ Xong
            </span>
          )}
          <button onClick={() => onDelete(task.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#d1d5db', fontSize: 18, lineHeight: 1,
            padding: 4, borderRadius: 6, transition: 'color 0.2s',
            flexShrink: 0,
          }}
            onMouseEnter={e => e.target.style.color = '#ef4444'}
            onMouseLeave={e => e.target.style.color = '#d1d5db'}
          >✕</button>
        </li>
      ))}
    </ul>
  )
}