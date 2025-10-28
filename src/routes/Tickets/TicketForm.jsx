import React, {useState} from 'react'
export default function TicketForm({onAdd}){
  const [form,setForm]=useState({title:'',status:'open',description:''})
  const submit=(e)=>{ e.preventDefault(); if(!form.title.trim()){ alert('Title required'); return } if(!['open','in_progress','closed'].includes(form.status)){ alert('Invalid status'); return } onAdd({...form,id:Date.now()}); setForm({title:'',status:'open',description:''}) }
  return (<form onSubmit={submit} style={{marginTop:12}}>
    <input placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} style={{width:'100%',padding:8}} required/>
    <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} style={{width:'100%',padding:8,marginTop:6}}>
      <option value="open">open</option><option value="in_progress">in_progress</option><option value="closed">closed</option>
    </select>
    <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} style={{width:'100%',padding:8,marginTop:6}}/>
    <button type="submit" style={{marginTop:8}}>Create Ticket</button>
  </form>)
}
