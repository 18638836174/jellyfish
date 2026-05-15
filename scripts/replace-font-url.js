const fs = require("fs");
const path = require("path");

function replaceFontUrl(filePath) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, "utf-8");

  const oldFontFace = /@font-face\{[^}]+\}/g;
  const newFontFace = `@font-face{font-weight:400;font-family:vant-icon;font-style:normal;font-display:auto;src:url(/static/fonts/vant-icon-d3825a.woff2) format("woff2"),url(/static/fonts/vant-icon-d3825a.woff) format("woff"),url(/static/fonts/vant-icon-d3825a.ttf) format("truetype")}`;

  content = content.replace(oldFontFace, newFontFace);

  fs.writeFileSync(filePath, content, "utf-8");
  console.log("Replaced font URL in:", filePath);
}

const iconWxss = path.join(
  __dirname,
  "../dist/build/mp-weixin/vant-weapp/lib/icon/index.wxss",
);
replaceFontUrl(iconWxss);

console.log("Done!");
