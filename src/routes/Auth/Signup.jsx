import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../../lib/auth'
export default function Signup(){
  const [form,setForm] = useState({name:'',email:'',password:''}); const nav = useNavigate()
  const submit = (e)=>{ e.preventDefault(); try{ registerUser(form); toast.success('Account created'); nav('/dashboard') }catch(err){ toast.error(err.message) } }
  return (
    <div style={{display:'flex',justifyContent:'center',padding:'2rem'}}>
      <form onSubmit={submit} className="card" style={{maxWidth:420,width:'100%'}}>
        <h2>Sign Up</h2>
        <input name="name" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required style={{width:'100%',padding:10}}/>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required style={{width:'100%',padding:10,marginTop:8}}/>
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required style={{width:'100%',padding:10,marginTop:8}}/>
        <button type="submit" style={{width:'100%',marginTop:10}}>Create Account</button>
        <p style={{marginTop:8}}>Have account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}
