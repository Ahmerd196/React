const STORAGE_KEY = "ticketapp_users";
const SESSION_KEY = "ticketapp_session";
export function registerUser(user){
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
  if(users.find(u=>u.email===user.email)) throw new Error("User exists");
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}
export function loginUser(email,password){ 
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
  const user = users.find(u=>u.email===email && u.password===password);
  if(!user) throw new Error("Incorrect email or password");
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}
export function getSession(){ const s = localStorage.getItem(SESSION_KEY); return s?JSON.parse(s):null }
export function clearSession(){ localStorage.removeItem(SESSION_KEY) }
