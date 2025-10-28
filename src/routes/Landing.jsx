import React from 'react'
import { Link } from 'react-router-dom'
export default function Landing(){ 
  return (
    <section className="card" style={{textAlign:'center'}}>
      <img src="/assets/hero-wave.svg" alt="wave" style={{width:'100%'}}/>
      <h1>Manage your tickets with TicketApp</h1>
      <p>Simple ticket CRUD, protected routes and responsive layout.</p>
      <div><Link to="/signup"><button>Get Started</button></Link> <Link to="/login"><button>Login</button></Link></div>
    </section>
  )
}
