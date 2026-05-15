const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = path.join(__dirname, "../src/static/tabbar");
const pngDir = path.join(__dirname, "../src/static/tabbar-png");

if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

const svgFiles = fs.readdirSync(srcDir).filter((f) => f.endsWith(".svg"));

async function convertSvgToPng() {
  for (const svgFile of svgFiles) {
    const baseName = svgFile.replace(".svg", ".png");
    const srcPath = path.join(srcDir, svgFile);
    const destPath = path.join(pngDir, baseName);

    try {
      await sharp(srcPath).resize(48, 48).png().toFile(destPath);
      console.log(`Converted: ${svgFile} -> ${baseName}`);
    } catch (err) {
      console.error(`Failed to convert ${svgFile}:`, err.message);
    }
  }
  console.log("Done!");
}

convertSvgToPng();
