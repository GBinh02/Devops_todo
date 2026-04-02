import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()

  const linkStyle = (path) => ({
    color: '#fff',
    textDecoration: 'none',
    fontWeight: pathname === path ? 'bold' : 'normal',
    padding: '4px 8px',
    borderRadius: 4,
    background: pathname === path ? 'rgba(255,255,255,0.2)' : 'transparent',
  })

  return (
    <nav style={{
      display: 'flex',
      gap: 16,
      padding: '12px 24px',
      background: '#4f46e5',
      alignItems: 'center',
    }}>
      <span style={{ color: '#fff', fontWeight: 'bold', marginRight: 8 }}>
        📝 TodoApp
      </span>
      <Link to="/"      style={linkStyle('/')}>Công việc</Link>
      <Link to="/about" style={linkStyle('/about')}>Về tôi</Link>
    </nav>
  )
}

export default Navbar