# Online? — Web Service Monitor

A real-time latency dashboard that tracks the availability of popular web services. Built with TypeScript, async programming, and pure DOM manipulation — no frameworks, no dependencies.

## Live Demo

Check the live version here: https://akyriuu.github.io/Monitoring-System/

## Design Evolution

**Initial design** — Mar 27, 2026


<img width="800" height="392" alt="ezgif-4dd72e0f8e1daa83" src="https://github.com/user-attachments/assets/7bdd3a3a-f29f-49c6-92e3-8ead7eaea55c" />


**Now** — May 05, 2026


<img width="800" height="332" alt="ezgif-65b01c5157fcdebd" src="https://github.com/user-attachments/assets/06f1fd18-5bbf-4532-b8cd-eef8f160a8b9" />



https://akyriuu.github.io/Monitoring-System/
> Live at the link above.
> 

## Features

- **Real-time ping** via Fetch API with `no-cors` mode
- **Dynamic cards** rendered and updated automatically
- **Color-coded status** with smooth CSS transitions:
  - 🟢 Green — low latency (< 600ms)
  - 🟡 Yellow — moderate latency (600ms – 1200ms)
  - 🔴 Red — high latency or offline (> 1200ms)
- **Auto-refresh** every 15 seconds

## Stack

- TypeScript (strict mode)
- Vanilla DOM
- CSS custom properties + `clamp()` for responsive layout
- `src/` → compiled to `build/` via `tsc`

## How to run

1. Clone the repository
2. Start the TypeScript compiler in watch mode:
   ```bash
   tsc -w
   ```
3. Open `index.html` with Live Server

## Adding services

Edit the `apps` array in `src/Realtime.ts`:

```typescript
{ name: "Vercel", id: "Vercel", url: "https://www.vercel.com" },
```

---

Made by [Akyriuu](https://github.com/akyriuu)
