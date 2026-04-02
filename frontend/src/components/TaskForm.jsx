import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title.trim())
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nhập công việc mới..."
        style={{
          flex: 1, padding: '10px 14px', fontSize: 15,
          borderRadius: 8, border: '1px solid #d1d5db', outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px', fontSize: 15, cursor: 'pointer',
          background: '#4f46e5', color: '#fff',
          border: 'none', borderRadius: 8,
        }}
      >
        + Thêm
      </button>
    </form>
  )
}

export default TaskForm