import fs from 'fs';
let html = fs.readFileSync('./public/miranda-world/index.html', 'utf8');
html = html.replace('<a href="javascript:void(0)" id="deviceOrientationToggle">\\n  <img class="icon off" src="img/compass.svg">\\n  <img class="icon on" src="img/compass.svg">\\n</a>\\n\\n<a href="javascript:void(0)" id="fullscreenToggle">',
`<a href="javascript:void(0)" id="deviceOrientationToggle">
  <img class="icon off" src="img/compass.svg">
  <img class="icon on" src="img/compass.svg">
</a>

<a href="javascript:void(0)" id="fullscreenToggle">`);
fs.writeFileSync('./public/miranda-world/index.html', html);
