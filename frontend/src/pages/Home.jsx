import { useState, useEffect } from 'react'
import TaskForm  from '../components/TaskForm'
import TaskList  from '../components/TaskList'
import StatsBar  from '../components/StatsBar'
import FilterBar from '../components/FilterBar'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function Home() {
  const [tasks,   setTasks]   = useState([])
  const [loading, setLoading] = useState(true)
  const [filter,  setFilter]  = useState('all')

  const fetchTasks = async () => {
    const res  = await fetch(`${API}/tasks`)
    const data = await res.json()
    setTasks(data)
    setLoading(false)
  }

  useEffect(() => { fetchTasks() }, [])

  const addTask = async (title) => {
    await fetch(`${API}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    fetchTasks()
  }

  const toggleTask = async (id, currentDone) => {
    await fetch(`${API}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !currentDone }),
    })
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, { method: 'DELETE' })
    fetchTasks()
  }

  const filtered = tasks.filter(t =>
    filter === 'all'    ? true :
    filter === 'active' ? !t.done :
    t.done
  )

  const done  = tasks.filter(t => t.done).length
  const total = tasks.length

  return (
    <div style={{ maxWidth: 620, margin: '32px auto', padding: '0 16px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
        📋 Công việc của tôi
      </h1>
      <TaskForm onAdd={addTask} />
      {total > 0 && <StatsBar total={total} done={done} />}
      {total > 0 && <FilterBar filter={filter} setFilter={setFilter} />}
      {loading
        ? <p style={{ color: '#9ca3af', textAlign: 'center', padding: 32 }}>Đang tải...</p>
        : <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} />
      }
    </div>
  )
}