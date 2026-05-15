const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const destDir = path.join(__dirname, "../src/static/tabbar-png");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const iconColor = "#999999";
const activeColor = "#1890ff";

const icons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M2 8l10-6 10 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="${iconColor}"/><polyline points="10 22 10 12 14 12 14 22" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "home-active": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M2 8l10-6 10 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="${activeColor}"/><polyline points="10 22 10 12 14 12 14 22" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  nearby: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" fill="${iconColor}"/><circle cx="12" cy="10" r="2.5" fill="white"/></svg>`,
  "nearby-active": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" fill="${activeColor}"/><circle cx="12" cy="10" r="2.5" fill="white"/></svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="9" fill="${iconColor}"/><line x1="12" y1="8" x2="12" y2="16" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
  "publish-active": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="12" r="9" fill="${activeColor}"/><line x1="12" y1="8" x2="12" y2="16" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
  mine: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="7.5" r="3.5" fill="${iconColor}"/><path d="M12 13c-4.42 0-7 1.79-7 4v2h14v-2c0-2.21-2.58-4-7-4z" fill="${iconColor}"/></svg>`,
  "mine-active": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="7.5" r="3.5" fill="${activeColor}"/><path d="M12 13c-4.42 0-7 1.79-7 4v2h14v-2c0-2.21-2.58-4-7-4z" fill="${activeColor}"/></svg>`,
};

async function createIcons() {
  for (const [name, svg] of Object.entries(icons)) {
    const destPath = path.join(destDir, `${name}.png`);
    await sharp(Buffer.from(svg)).resize(48, 48).png().toFile(destPath);
    console.log(`Created ${name}.png`);
  }
  console.log("Done!");
}

createIcons();
