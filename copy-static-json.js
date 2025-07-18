const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "static.json");
const dest = path.join(__dirname, "build", "static.json");

fs.copyFileSync(src, dest);
console.log("✅ static.json copied to build/");
