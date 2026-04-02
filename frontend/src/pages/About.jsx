import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function About() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    fetch(`${API}/about`)
      .then(res => res.json())
      .then(setInfo)
      .catch(() => setInfo({ error: true }))
  }, [])

  if (!info) return <p style={{ padding: 32 }}>Đang tải...</p>

  const rows = [
    { label: 'Họ và tên',      value: info.student },
    { label: 'Mã số sinh viên', value: info.id      },
    { label: 'Lớp',            value: info.class    },
    { label: 'Ứng dụng',       value: info.app      },
  ]

  return (
    <div style={{ maxWidth: 600, margin: '32px auto', padding: '0 16px' }}>
      <h1 style={{ marginBottom: 24 }}>👤 Thông tin sinh viên</h1>
      <div style={{
        background: '#fff', border: '1px solid #e5e7eb',
        borderRadius: 12, overflow: 'hidden',
      }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'flex', padding: '14px 20px',
              borderBottom: i < rows.length - 1 ? '1px solid #f3f4f6' : 'none',
              background: i % 2 === 0 ? '#fff' : '#f9fafb',
            }}
          >
            <span style={{ width: 160, color: '#6b7280', fontSize: 14 }}>{row.label}</span>
            <span style={{ fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About