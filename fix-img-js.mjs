import fs from 'fs';
let js = fs.readFileSync('./public/miranda-world/index.js', 'utf8');

js = js.replace(/var urlPrefix = "tiles";/g, 'var urlPrefix = "https://mapendano.github.io/Miranda-World-/tiles";');

fs.writeFileSync('./public/miranda-world/index.js', js);
