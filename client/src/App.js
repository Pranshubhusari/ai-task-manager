import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const backend = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  const fetchTasks = async () => {
    try {
      const res = await axios.get(backend + '/api/tasks');
      setTasks(res.data);
    } catch (e) {
      console.error(e);
      alert('Cannot fetch tasks. Is backend running?');
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async () => {
    try {
      const aiRes = await axios.post(backend + '/api/ai-priority', { title, description: desc });
      const priority = aiRes.data.priority || 'Medium';
      const res = await axios.post(backend + '/api/tasks', { title, description: desc, category: 'General', priority });
      setTasks([...tasks, res.data]);
      setTitle(''); setDesc('');
    } catch (e) {
      console.error(e);
      alert('Failed to add task. Check backend.');
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(backend + '/api/tasks/' + id);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🧠 AI Task Manager (no-login)</h1>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <input className="input" placeholder="Task title" value={title} onChange={e=>setTitle(e.target.value)} />
          <input className="input" placeholder="Short description" value={desc} onChange={e=>setDesc(e.target.value)} />
          <button className="btn" onClick={addTask}>Add</button>
        </div>
      </div>

      <div style={{marginTop:16}}>
        {tasks.map(t => (
          <div key={t._id} className="card" style={{marginTop:10}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <div style={{fontWeight:700}}>{t.title}</div>
                <div style={{color:'#6b7280'}}>{t.description}</div>
                <div style={{marginTop:6, fontSize:13}}>Priority: <strong>{t.priority}</strong></div>
              </div>
              <div>
                <button className="btn" onClick={()=>deleteTask(t._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
