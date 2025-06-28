import { useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const jitsiRef = useRef(null);
  const [password, setPassword] = useState('');
  let api = null;

  const startMeeting = async () => {
    const response = await fetch('https://fail2fwd-backend.onrender.com/create-room'); // change this to your deployed backend
    const data = await response.json();
    const room = data.room;

    if (api) api.dispose();

    api = new window.JitsiMeetExternalAPI('meet.jit.si', {
      roomName: room,
      parentNode: jitsiRef.current,
      width: '100%',
      height: 600,
    });

    api.addEventListener('videoConferenceJoined', () => {
      if (password) {
        api.executeCommand('password', password);
      }
    });
  };

  return (
    <>
      <Navbar />

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#3f51b5' }}>🚀 Fail2fwd Meet</h1>
        <p>Empowering learning through fearless failing forward.</p>

        <input
          type="password"
          placeholder="Set meeting password (optional)"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            marginBottom: '10px',
            width: '250px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <br />

        <button
          onClick={startMeeting}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3f51b5',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Start Secure Meeting
        </button>

        <div
          id="meet"
          ref={jitsiRef}
          style={{
            marginTop: '2rem',
            height: '80vh',
            width: '100%',
            border: '2px solid #ddd',
            borderRadius: '10px',
          }}
        ></div>
      </div>

      <Footer />
    </>
  );
}

export default App;
