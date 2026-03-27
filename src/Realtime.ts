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
    name: "Stack Overflow",
    id: "StackOverflow",
    url: "https://stackoverflow.com",
  },
];

function renderInterface(): void {
  const container = document.querySelector(".container") as HTMLDivElement;
  if (!container) return;

  container.innerHTML = ""; //Clear any duplicated elements

  apps.forEach((app) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `${app.name}: <br> <span id="val-${app.id}">0ms</span>`;
    container.appendChild(box);
  });
}

async function updateStatus(): Promise<void> {
  const promises = apps.map(async (app) => {
    const statusElement = document.getElementById(`val-${app.id}`);
    const boxElement = statusElement?.parentElement as HTMLDivElement;

    if (statusElement && boxElement) {
      const start = Date.now();
      try {
        await fetch(`https://www.${app.id.toLowerCase()}.com`, {
          mode: "no-cors",
          cache: "no-cache",
        });

        const finish = Date.now();
        const ping = finish - start;

        statusElement.innerText = `${ping}ms`;
        // I'll apply the color rules, where the color red will determine high ping, the closer to green, the better the ping.
        if (ping > 400) {
          //ridiculous ping for a site, but it can happen, so I'll set the threshold for red at 400ms
          boxElement.classList.add("error");
        } else if (ping > 200) {
          boxElement.classList.add("warning");
        }
      } catch (error) {
        statusElement.innerText = "Offline";
        boxElement.classList.add("error");
      }
    }
  });

  await Promise.all(promises);
}
window.addEventListener("DOMContentLoaded", () => {
  renderInterface();
  updateStatus();
  setInterval(updateStatus, 15000);
});
