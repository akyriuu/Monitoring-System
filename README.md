# Online? — Web Service Monitor

A real-time latency dashboard that tracks the availability of popular web services. Built with TypeScript, async programming, and pure DOM manipulation — no frameworks, no dependencies.

## Live Demo

Check the live version here: [link]

## Design Evolution

**Initial design**
![initial design gif]

**Now**

> Live at the link above.

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
