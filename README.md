# TicketApp - React (Minimal runnable)

## Run
1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173

## Notes
- Signup stores users in localStorage key `ticketapp_users` and sets `ticketapp_session` on login.
- Tickets stored under `tickets` key in localStorage.
- Protected routes redirect to /login if not authenticated.
