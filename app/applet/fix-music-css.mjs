import fs from 'fs';
let css = fs.readFileSync('./public/miranda-world/style.css', 'utf8');
css += `
#musicToggle {
  display: block;
  position: absolute;
  top: 0;
  right: 80px;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: rgb(103,115,131);
  background-color: rgba(103,115,131,0.8);
}
.mobile #musicToggle {
  width: 50px;
  height: 50px;
  right: 100px;
}
body.fullscreen-enabled #musicToggle {
  right: 120px;
}
body.fullscreen-enabled.mobile #musicToggle {
  right: 150px;
}
#musicToggle .icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
}
.mobile #musicToggle .icon {
  top: 10px;
  right: 10px;
}
#musicToggle .icon.on { display: none; }
#musicToggle .icon.off { display: block; }
#musicToggle.enabled .icon.on { display: block; }
#musicToggle.enabled .icon.off { display: none; }
`;
fs.writeFileSync('./public/miranda-world/style.css', css);
