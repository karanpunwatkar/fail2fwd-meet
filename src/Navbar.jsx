function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3f51b5',
      padding: '1rem',
      color: '#fff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        Fail2fwd
      </div>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1rem',
        alignItems: 'center',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={linkStyle}>Home</a></li>

        <li style={{ position: 'relative' }}>
          <span style={{ ...linkStyle, cursor: 'pointer' }}>Opportunities ▾</span>
          <ul style={{
            position: 'absolute',
            top: '2.5rem',
            left: 0,
            backgroundColor: '#fff',
            color: '#000',
            padding: '0.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            display: 'none'
          }} className="dropdown">
            <li><a href="#" style={dropdownLink}>Freelance</a></li>
            <li><a href="#" style={dropdownLink}>Collaborative Projects</a></li>
            <li><a href="#" style={dropdownLink}>Network Connections</a></li>
            <li><a href="#" style={dropdownLink}>Doubts</a></li>
            <li><a href="#" style={dropdownLink}>Share Your Notes</a></li>
            <li><a href="#" style={dropdownLink}>One-on-One Counseling</a></li>
          </ul>
        </li>

        <li><a href="#" style={linkStyle}>About Us</a></li>
        <li><a href="#" style={linkStyle}>Contact</a></li>
        <li><a href="#" style={linkStyle}>Login / Signup</a></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  position: 'relative'
};

const dropdownLink = {
  color: '#333',
  textDecoration: 'none',
  display: 'block',
  padding: '0.3rem 0'
};

export default Navbar;
