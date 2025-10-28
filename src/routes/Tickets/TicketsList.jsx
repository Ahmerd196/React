import React from 'react'
export default function TicketsList({tickets,onUpdate,onDelete}){
  return (<div style={{marginTop:16}}>{tickets.length===0?<p>No tickets</p>:tickets.map((t,i)=>(
    <div key={t.id||i} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
      <div>
        <div style={{fontWeight:700}}>{t.title}</div>
        <div style={{fontSize:12,color:'#555'}}>{t.description}</div>
      </div>
      <div style={{textAlign:'right'}}>
        <div style={{marginBottom:6}}><span style={{padding:'4px 8px',borderRadius:999,background:t.status==='open'?'#16a34a':t.status==='in_progress'?'#f59e0b':'#6b7280',color:'#fff'}}>{t.status}</span></div>
        <div style={{display:'flex',gap:6}}>
          <button onClick={()=>{ const next = t.status==='open'?'in_progress': t.status==='in_progress'?'closed':'open'; onUpdate(i,{...t,status:next}) }}>Advance</button>
          <button onClick={()=>onDelete(i)}>Delete</button>
        </div>
      </div>
    </div>
  ))}</div>)
}
