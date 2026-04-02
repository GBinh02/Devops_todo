import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title.trim())
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Thêm công việc mới..."
        style={{
          flex: 1, padding: '12px 16px', fontSize: 15,
          borderRadius: 10, border: `2px solid ${focused ? '#4f46e5' : '#e5e7eb'}`,
          outline: 'none', background: '#fff',
          transition: 'border-color 0.2s',
          boxShadow: focused ? '0 0 0 3px rgba(79,70,229,0.1)' : 'none',
        }}
      />
      <button type="submit" disabled={!title.trim()} style={{
        padding: '12px 22px', fontSize: 15, fontWeight: 600,
        background: title.trim() ? '#4f46e5' : '#c7d2fe',
        color: '#fff', border: 'none', borderRadius: 10,
        cursor: title.trim() ? 'pointer' : 'default',
        transition: 'all 0.2s', whiteSpace: 'nowrap',
      }}>
        + Thêm
      </button>
    </form>
  )
}