interface AppConfig {
  name: string;
  id: string;
  url: string;
}

const apps: AppConfig[] = [
  { name: "Instagram", id: "Instagram", url: "https://www.instagram.com" },
  { name: "Youtube", id: "Youtube", url: "https://www.youtube.com" },
  { name: "Netflix", id: "Netflix", url: "https://www.netflix.com" },
  { name: "HBO", id: "HBO", url: "https://www.hbomax.com" },
  { name: "Tiktok", id: "Tiktok", url: "https://www.tiktok.com" },
  { name: "Steam", id: "Steam", url: "https://store.steampowered.com" },
  { name: "Nubank", id: "Nubank", url: "https://www.nubank.com.br" },
  { name: "Linkedin", id: "Linkedin", url: "https://www.linkedin.com" },
  { name: "Whatsapp", id: "Whatsapp", url: "https://web.whatsapp.com" },
  { name: "X", id: "X", url: "https://www.x.com" },
  { name: "Disney+", id: "Disney", url: "https://www.disneyplus.com" },
  { name: "Spotify", id: "Spotify", url: "https://www.spotify.com" },
  { name: "Twitch", id: "Twitch", url: "https://www.twitch.tv" },
  { name: "GitHub", id: "GitHub", url: "https://www.github.com" },
  { name: "ChatGPT", id: "ChatGPT", url: "https://chatgpt.com" },
  { name: "Discord", id: "Discord", url: "https://www.discord.com" },
  { name: "Reddit", id: "Reddit", url: "https://www.reddit.com" },
  { name: "Epic Games", id: "Epic", url: "https://www.epicgames.com" },
  { name: "Roblox", id: "Roblox", url: "https://www.roblox.com" },
  {
    name: "Crunchyroll",
    id: "Crunchyroll",
    url: "https://www.crunchyroll.com",
  },
  { name: "Prime Video", id: "Prime Video", url: "https://www.primevideo.com" },
  { name: "Apple TV+", id: "Apple TV+", url: "https://tv.apple.com" },
  { name: "Vercel", id: "Vercel", url: "https://www.vercel.com" },
  { name: "Cloudflare", id: "Cloudflare", url: "https://www.cloudflare.com" },
  { name: "npm", id: "NPM", url: "https://www.npmjs.com" },
  { name: "GitLab", id: "GitLab", url: "https://www.gitlab.com" },
  {
    name: "PlayStation",
    id: "Playstation",
    url: "https://www.playstation.com",
  },
  { name: "Xbox", id: "Xbox", url: "https://www.xbox.com" },
  { name: "PayPal", id: "Paypal", url: "https://www.paypal.com" },
  {
    name: "Stack Overflow",
    id: "StackOverflow",
    url: "https://stackoverflow.com",
  },
];

// =============================================

// Parameters to change colors, how high is red? how low is green? <==

const warnMS = 600; //above this, yellow, no-cors causes it to be really high, so this much is not actually THAT much.
const errorMS = 1200; //above this, red.

const statusClass = ["status-green", "warning", "error"]; // this is the order of the classes (colors)

// =============================================

function renderInterface(): void {
  const container = document.querySelector(".container") as HTMLDivElement;
  if (!container) return;

  container.innerHTML = ""; //Clear any duplicated elements

  apps.forEach((app) => {
    const box = document.createElement("div");
    box.className = "box";

    // ==> service name <==
    const name = document.createElement("span");
    name.className = "box-name";
    name.textContent = app.name;

    // ==> Line break <==
    const meta = document.createElement("div");
    meta.className = "box-meta";

    const latency = document.createElement("span");
    latency.className = "box-latency";
    latency.id = `val-${app.id}`;
    latency.textContent = "...";

    const dot = document.createElement("span");
    dot.className = "box-dot";

    meta.appendChild(latency);
    meta.appendChild(dot);
    box.appendChild(name);
    box.appendChild(meta);
    container.appendChild(box);
  });
}

async function updateStatus(): Promise<void> {
  const promises = apps.map(async (app) => {
    const latencyEl = document.getElementById(`val-${app.id}`);
    const box = latencyEl?.closest<HTMLDivElement>(".box");
    if (!latencyEl || !box) return;

    const start = Date.now();
    try {
      await fetch(app.url, { mode: "no-cors", cache: "no-cache" });
      const ping = Date.now() - start;

      latencyEl!.textContent = `${ping} ms`;

      // ====> cleaning before applying again<====

      box.classList.remove(...statusClass);

      if (ping > errorMS) {
        box.classList.add("error");
      } else if (ping > warnMS) {
        box.classList.add("warning");
      } else {
        box.classList.add("status-green");
      }
    } catch {
      latencyEl!.textContent = "offline";
      box.classList.remove(...statusClass);
      box.classList.add("error");
    }
  });

  await Promise.all(promises);
}

window.addEventListener("DOMContentLoaded", () => {
  renderInterface();
  updateStatus();
  setInterval(updateStatus, 3_000);
});
