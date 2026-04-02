import { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function Home() {
  const [tasks, setTasks]   = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTasks = async () => {
    const res  = await fetch(`${API}/tasks`)
    const data = await res.json()
    setTasks(data)
    setLoading(false)
  }

  useEffect(() => { fetchTasks() }, [])

  const addTask = async (title) => {
    await fetch(`${API}/tasks`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ title }),
    })
    fetchTasks()
  }

  const toggleTask = async (id, currentDone) => {
    await fetch(`${API}/tasks/${id}`, {
      method:  'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ done: !currentDone }),
    })
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, { method: 'DELETE' })
    fetchTasks()
  }

  const done  = tasks.filter(t => t.done).length
  const total = tasks.length

  return (
    <div style={{ maxWidth: 600, margin: '32px auto', padding: '0 16px' }}>
      <h1 style={{ marginBottom: 4 }}>📋 Công việc của tôi</h1>
      {total > 0 && (
        <p style={{ color: '#6b7280', marginBottom: 24, fontSize: 14 }}>
          {done}/{total} hoàn thành
        </p>
      )}
      <TaskForm onAdd={addTask} />
      {loading
        ? <p style={{ color: '#9ca3af' }}>Đang tải...</p>
        : <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      }
    </div>
  )
}

export default Home 