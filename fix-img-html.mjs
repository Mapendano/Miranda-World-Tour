import fs from 'fs';
let html = fs.readFileSync('./public/miranda-world/index.html', 'utf8');

html = html.replace(/src="img\//g, 'src="https://mapendano.github.io/Miranda-World-/img/');

fs.writeFileSync('./public/miranda-world/index.html', html);
