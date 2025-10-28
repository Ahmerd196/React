import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../../lib/auth'
export default function Login(){
  const [form,setForm] = useState({email:'',password:''}); const nav = useNavigate()
  const submit = (e)=>{ e.preventDefault(); try{ loginUser(form.email, form.password); toast.success('Logged in'); nav('/dashboard') }catch(err){ toast.error(err.message) } }
  return (
    <div style={{display:'flex',justifyContent:'center',padding:'2rem'}}>
      <form onSubmit={submit} className="card" style={{maxWidth:420,width:'100%'}}>
        <h2>Login</h2>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required style={{width:'100%',padding:10}}/>
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required style={{width:'100%',padding:10,marginTop:8}}/>
        <button type="submit" style={{width:'100%',marginTop:10}}>Login</button>
        <p style={{marginTop:8}}>No account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  )
}
