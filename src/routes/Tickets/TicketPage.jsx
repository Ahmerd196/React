import React, {useState,useEffect} from 'react'
import TicketForm from './TicketForm'
import TicketList from './TicketsList'
export default function TicketPage(){
  const [tickets,setTickets] = useState([])
  useEffect(()=> setTickets(JSON.parse(localStorage.getItem('tickets')||'[]')), [])
  const save = (tks)=>{ localStorage.setItem('tickets', JSON.stringify(tks)); setTickets(tks) }
  const add = (t)=> save([...tickets, t])
  const update = (i,t)=> { const c=[...tickets]; c[i]=t; save(c) }
  const remove = (i)=> { if(!confirm('Delete ticket?')) return; const c=tickets.filter((_,k)=>k!==i); save(c) }
  return (<div className="card"><h2>Tickets</h2><TicketForm onAdd={add}/><TicketList tickets={tickets} onUpdate={update} onDelete={remove}/></div>)
}
