import React, {useEffect, useState} from 'react'
import { getSession, clearSession } from '../lib/auth'
import { useNavigate, Link } from 'react-router-dom'
export default function Dashboard(){
  const nav = useNavigate(); const [user,setUser]=useState(null)
  useEffect(()=>{ const s=getSession(); if(!s){ nav('/login') } else setUser(s)},[nav])
  const logout=()=>{ clearSession(); nav('/login') }
  // load tickets
  const tickets = JSON.parse(localStorage.getItem('tickets')||'[]');
  const total = tickets.length, open = tickets.filter(t=>t.status==='open').length, closed = tickets.filter(t=>t.status==='closed').length;
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between'}}><h1>Dashboard</h1><div><button onClick={logout}>Logout</button></div></div>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <div className="card">Total<br/><strong>{total}</strong></div>
        <div className="card">Open<br/><strong>{open}</strong></div>
        <div className="card">Closed<br/><strong>{closed}</strong></div>
      </div>
      <div style={{marginTop:16}}><Link to="/tickets"><button>Manage Tickets</button></Link></div>
    </div>
  )
}
