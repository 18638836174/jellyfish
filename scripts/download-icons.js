const fs = require("fs");
const path = require("path");
const https = require("https");

const icons = [
  {
    name: "home",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/home.svg",
  },
  {
    name: "home-active",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/home-fill.svg",
  },
  {
    name: "nearby",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/map-pin.svg",
  },
  {
    name: "nearby-active",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/map-pin-fill.svg",
  },
  {
    name: "publish",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/add-circle.svg",
  },
  {
    name: "publish-active",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/add-circle-fill.svg",
  },
  {
    name: "mine",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/user.svg",
  },
  {
    name: "mine-active",
    url: "https://cdn.jsdelivr.net/npm/@remixdesign/icons@1.0.0/Icon/user-fill.svg",
  },
];

const destDir = path.join(__dirname, "../src/static/tabbar");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          downloadFile(response.headers.location, dest)
            .then(resolve)
            .catch(reject);
          return;
        }

        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${path.basename(dest)}`);
          resolve();
        });
      })
      .on("error", (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });
  });
}

async function downloadAll() {
  for (const icon of icons) {
    const dest = path.join(destDir, `${icon.name}.svg`);
    try {
      await downloadFile(icon.url, dest);
    } catch (err) {
      console.error(`Failed to download ${icon.name}:`, err.message);
    }
  }
  console.log("Done!");
}

downloadAll();
