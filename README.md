### What does this keep track of?

 
A real-time monitoring dashboard built to track the latency and availability of popular web services. This project focuses on TypeScript best practices, asynchronous programming, and clean UI state management.

### Real-time Latency Tracking:

Uses the Fetch API with no-cors mode to estimate response times (ping) for major platforms like Google, Instagram, and Netflix.

### Dynamic UI:

Automatically renders service cards and updates status indicators using pure DOM manipulation.
Visual Status Indicators:

### Features smooth CSS transitions between status states:

Green: Low latency (<100ms)

Yellow: Moderate latency (>200ms)

Red: High latency or Offline (>400ms)


https://github.com/user-attachments/assets/92ed5876-68f2-4f8e-a654-3a2660b437e7

### Modern Tooling:

Configured with a strict TypeScript environment, utilizing a src/build directory structure for optimized compilation.

## How to run

1. Clone the repository.
2. Run `npm install` (if using any packages) or simply open the terminal.
3. Start the TypeScript compiler: `tsc -w`.
4. Open `Monitoring.html` with Live Server.
