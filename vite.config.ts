import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
import fs from "fs";

function copyVantWeapp() {
  return {
    name: "copy-vant-weapp",
    closeBundle() {
      const srcDir = path.resolve(__dirname, "node_modules/vant-weapp");

      const copyDir = (destDir: string) => {
        if (fs.existsSync(srcDir)) {
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }

          const copyRecursive = (src: string, dest: string) => {
            if (!fs.existsSync(dest)) {
              fs.mkdirSync(dest, { recursive: true });
            }
            const files = fs.readdirSync(src);
            files.forEach((file) => {
              const srcPath = path.join(src, file);
              const destPath = path.join(dest, file);
              if (fs.statSync(srcPath).isDirectory()) {
                copyRecursive(srcPath, destPath);
              } else {
                let content = fs.readFileSync(srcPath);
                let destContent = content;

                if (file.endsWith(".wxss") || file.endsWith(".wxml")) {
                  destContent = content
                    .toString()
                    .replace(
                      /url\(https:\/\/img\.yzcdn\.cn\/vant\/[^)]+\)/g,
                      "url('/static/fonts/vant-icon-d3825a.woff2')",
                    );
                }

                if (file.endsWith(".wxss")) {
                  destContent = destContent
                    .toString()
                    .replace(
                      /@font-face\{[^}]+\}/g,
                      '@font-face{font-weight:400;font-family:vant-icon;font-style:normal;font-display:auto;src:url(/static/fonts/vant-icon-d3825a.woff2) format("woff2"),url(/static/fonts/vant-icon-d3825a.woff) format("woff"),url(/static/fonts/vant-icon-d3825a.ttf) format("truetype")}',
                    );
                }

                fs.writeFileSync(destPath, destContent);
              }
            });
          };
          copyRecursive(srcDir, destDir);
          console.log(`vant-weapp copied to ${destDir}`);
        }
      };

      copyDir(path.resolve(__dirname, "dist/dev/mp-weixin/vant-weapp"));
      copyDir(path.resolve(__dirname, "dist/build/mp-weixin/vant-weapp"));
    },
  };
}

export default defineConfig({
  plugins: [uni(), copyVantWeapp()],
});
