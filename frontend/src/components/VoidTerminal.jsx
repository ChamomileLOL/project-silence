import React, { useState } from 'react';
import axios from 'axios';

const VoidTerminal = () => {
  const [logs, setLogs] = useState([
    "> SYSTEM READY...", 
    "> CONNECTED TO RAMANUJAN KERNEL...",
    "> WAITING FOR USER INPUT..."
  ]);
  const [loading, setLoading] = useState(false);

  // THE API CALL TO YOUR BACKEND
  const accessTheVoid = async () => {
    setLoading(true);
    addLog("> INITIATING RAMANUJAN PROTOCOL...");
    
    try {
      // Talking to your Express Server on Port 3000
      const response = await axios.get('http://localhost:3000/api/silence');
      
      const data = response.data;
      
      if (data.success) {
        addLog(`> STATUS: ${data.message}`);
        addLog(`> LOGIC: ${data.technical_data.logic}`);
        addLog(`> RESULT: ${data.technical_data.result}`);
        // THIS IS THE PROOF OF DB CONNECTION:
        addLog(`> WITNESS ID: ${data.technical_data.db_record_id}`);
        addLog("> --------------------------------");
        addLog("> TRUTH PRESERVED. SILENCE ACHIEVED.");
      }
    } catch (error) {
      console.error(error);
      addLog(`> ERROR: ${error.message}`);
      addLog("> IS THE BACKEND RUNNING? (CHECK PORT 3000)");
    } finally {
      setLoading(false);
    }
  };

  const addLog = (msg) => {
    setLogs(prev => [...prev, msg]);
  };

  // MATRIX STYLING
  return (
    <div style={styles.terminal}>
      <div style={styles.header}>:: PROJECT SILENCE :: RAMANUJAN ACCESS PORTAL ::</div>
      <div style={styles.screen}>
        {logs.map((log, index) => (
          <div key={index} style={styles.logLine}>{log}</div>
        ))}
        {loading && <div style={styles.blink}>_</div>}
      </div>
      <button 
        onClick={accessTheVoid} 
        style={styles.button}
        disabled={loading}
      >
        {loading ? "CALCULATING..." : "EXECUTE void(SIMRAN)"}
      </button>
    </div>
  );
};

const styles = {
  terminal: {
    backgroundColor: '#000',
    color: '#0f0',
    fontFamily: 'Courier New, monospace',
    padding: '20px',
    maxWidth: '700px',
    margin: '50px auto',
    borderRadius: '5px',
    border: '1px solid #333',
    boxShadow: '0 0 30px rgba(0, 255, 0, 0.1)'
  },
  header: {
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    letterSpacing: '2px'
  },
  screen: {
    height: '400px',
    overflowY: 'auto',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#050505',
    border: '1px solid #111'
  },
  logLine: { margin: '5px 0' },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#0f0',
    color: '#000',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Courier New'
  },
  blink: { animation: 'blink 1s infinite' }
};

export default VoidTerminal;