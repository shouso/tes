# Queue App — Multi-Tenant Public Space Queue

## Backend

- SQLite + Sequelize — persistent queue, multi-location support
- Express REST API:
  - `/queue?location=...` — get queue by location
  - `/queue/join` — join queue
  - `/queue/leave` — leave queue
  - `/queue/next` — admin dequeue
- Socket.IO for realtime queue updates subscription (per location)
- Migration: `npm run migrate` (dev only — resets DB)

## Frontend

- React UI for join/leave/view by location
- Kiosk display: `/KioskDisplay.jsx`, provides QR for each location (`?queue=bankA`)
- Real-time update when queue changes

## Multi-tenant logic

- Each location (e.g. branch, room, etc.) has its own queue
- Kiosk display and QR join customized by location param

## Run locally

### Backend
```sh
cd backend
npm install
npm run migrate       # Resets DB and creates tables
npm start
```

### Frontend
```sh
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

- Visit `/` for main app, adjust KioskDisplay to match location as needed.

## Production notes

- Use PostgreSQL, MySQL, or production SQLite config for serious deployments.
- Add admin authentication or user login for richer features.
- Each location can run kiosk display on a tablet or public PC. QR links join that branch/location queue instantly.
