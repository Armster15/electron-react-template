// Fix for https://github.com/electron-userland/electron-webpack/issues/307

const fs = require("fs");
const path = require("path");

const cpmPath = path.join(
  __dirname,
  "node_modules",
  "electron-webpack",
  "out",
  "dev",
  "ChildProcessManager.js"
);

let script = fs.readFileSync(cpmPath).toString("utf8");
script = script.replace(
  'const isWin = process.platform === "win32";',
  "const isWin = false;"
);

fs.writeFileSync(cpmPath, script);
console.log("Applied Postinstall Patch")