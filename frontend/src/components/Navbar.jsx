import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const link = (path, label) => (
    <Link to={path} style={{
      color: pathname === path ? '#fff' : 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
      fontWeight: pathname === path ? 600 : 400,
      padding: '6px 14px',
      borderRadius: 8,
      background: pathname === path ? 'rgba(255,255,255,0.15)' : 'transparent',
      transition: 'all 0.2s',
      fontSize: 15,
    }}>{label}</Link>
  )

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '0 24px', height: 56,
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      boxShadow: '0 2px 12px rgba(79,70,229,0.3)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginRight: 12 }}>
        ✅ TodoApp
      </span>
      {link('/', 'Công việc')}
      {link('/about', 'Về tôi')}
    </nav>
  )
}