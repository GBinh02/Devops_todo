import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function About() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    fetch(`${API}/about`).then(r => r.json()).then(setInfo).catch(() => setInfo({}))
  }, [])

  if (!info) return <p style={{ padding: 32 }}>Đang tải...</p>

  const rows = [
    { icon: '👤', label: 'Họ và tên',        value: info.student },
    { icon: '🎓', label: 'Mã số sinh viên',   value: info.id      },
    { icon: '🏫', label: 'Lớp',               value: info.class   },
    { icon: '💻', label: 'Ứng dụng',          value: info.app     },
  ]

  return (
    <div style={{ maxWidth: 560, margin: '32px auto', padding: '0 16px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>👤 Thông tin sinh viên</h1>
      <div style={{
        background: '#fff', borderRadius: 16,
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
      }}>
        {/* Header banner */}
        <div style={{
          background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
          padding: '28px 24px', textAlign: 'center',
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, margin: '0 auto 10px',
          }}>🧑‍💻</div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>{info.student}</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>{info.class}</div>
        </div>

        {/* Info rows */}
        {rows.map((row, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 24px',
            borderBottom: i < rows.length - 1 ? '1px solid #f3f4f6' : 'none',
            background: i % 2 === 0 ? '#fff' : '#fafafa',
          }}>
            <span style={{ fontSize: 20 }}>{row.icon}</span>
            <span style={{ color: '#6b7280', fontSize: 14, width: 150 }}>{row.label}</span>
            <span style={{ fontWeight: 600, fontSize: 15 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Health check card */}
      <div style={{
        marginTop: 16, padding: '16px 20px',
        background: '#f0fdf4', border: '1px solid #bbf7d0',
        borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 20 }}>🟢</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: '#15803d' }}>Server đang hoạt động</div>
          <div style={{ fontSize: 13, color: '#6b7280' }}>{API}/health</div>
        </div>
      </div>
    </div>
  )
}