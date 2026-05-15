const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const fonts = [
  "https://img.yzcdn.cn/vant/vant-icon-d3825a.woff2",
  "https://img.yzcdn.cn/vant/vant-icon-d3825a.woff",
  "https://img.yzcdn.cn/vant/vant-icon-d3825a.ttf",
];

const destDir = path.join(__dirname, "../src/static/fonts");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          downloadFile(redirectUrl, dest).then(resolve).catch(reject);
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
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

async function downloadAll() {
  for (const url of fonts) {
    const filename = path.basename(url);
    const dest = path.join(destDir, filename);
    try {
      await downloadFile(url, dest);
    } catch (err) {
      console.error(`Failed to download ${filename}:`, err.message);
    }
  }
  console.log("Done!");
}

downloadAll();
