function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f1f1f1',
      padding: '1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#555',
      marginTop: '2rem',
      borderTop: '1px solid #ddd'
    }}>
      Developed by <strong>Karan Punwatkar</strong> © {new Date().getFullYear()} — <strong>Fail2fwd</strong>
    </footer>
  );
}

export default Footer;
