export default function FilterBar({ filter, setFilter }) {
  const tabs = [
    { key: 'all',    label: 'Tất cả' },
    { key: 'active', label: 'Chưa xong' },
    { key: 'done',   label: 'Hoàn thành' },
  ]

  return (
    <div style={{
      display: 'flex', gap: 6, marginBottom: 16,
      background: '#e5e7eb', borderRadius: 10, padding: 4,
    }}>
      {tabs.map(t => (
        <button key={t.key} onClick={() => setFilter(t.key)} style={{
          flex: 1, padding: '8px 0', fontSize: 14, fontWeight: 500,
          border: 'none', borderRadius: 7, cursor: 'pointer',
          background: filter === t.key ? '#fff' : 'transparent',
          color: filter === t.key ? '#4f46e5' : '#6b7280',
          boxShadow: filter === t.key ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.2s',
        }}>{t.label}</button>
      ))}
    </div>
  )
}