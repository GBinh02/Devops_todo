export default function StatsBar({ total, done }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: '16px 20px',
      marginBottom: 20, border: '1px solid #e5e7eb',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
        <span style={{ color: '#6b7280' }}>Tiến độ</span>
        <span style={{ fontWeight: 600, color: '#4f46e5' }}>{done}/{total} hoàn thành</span>
      </div>
      <div style={{ height: 8, background: '#e5e7eb', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 99,
          width: `${pct}%`,
          background: pct === 100 ? '#10b981' : 'linear-gradient(90deg, #4f46e5, #7c3aed)',
          transition: 'width 0.4s ease',
        }} />
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
        {[
          { label: 'Tổng', value: total, color: '#6b7280' },
          { label: 'Còn lại', value: total - done, color: '#f59e0b' },
          { label: 'Xong', value: done, color: '#10b981' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center', flex: 1,
            background: '#f9fafb', borderRadius: 8, padding: '8px 0' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 12, color: '#9ca3af' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}