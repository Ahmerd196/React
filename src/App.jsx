import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Landing from './routes/Landing'
import Login from './routes/Auth/Login'
import Signup from './routes/Auth/Signup'
import Dashboard from './routes/Dashboard'
import TicketPage from './routes/Tickets/TicketPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getSession } from './lib/auth'
function Protected({children}){ return getSession()?children:<Navigate to="/login" replace/> }
export default function App(){
  return (
    <div>
      <header className="header card">
        <div><strong>🎟️ TicketApp</strong></div>
        <nav><Link to="/login">Login</Link> &nbsp; <Link to="/signup">Signup</Link></nav>
      </header>
      <main className="container"><Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/>
        <Route path="/tickets" element={<Protected><TicketPage/></Protected>}/>
      </Routes></main>
      <footer className="card container" style={{textAlign:'center', marginTop:250}}>© {'2025'}&nbsp;<span>TicketApp</span> — Built with ❤️ using React.</footer>
      <ToastContainer position="top-right"/>
    </div>
  )
}
