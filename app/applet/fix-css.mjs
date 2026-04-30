import fs from 'fs';
let css = fs.readFileSync('./public/miranda-world/style.css', 'utf8');

const newCSS = `

#deviceOrientationToggle {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: rgb(103,115,131);
  background-color: rgba(103,115,131,0.8);
}

.mobile #deviceOrientationToggle {
  width: 50px;
  height: 50px;
}

/* Position adjustments */
body.fullscreen-enabled #deviceOrientationToggle {
  right: 40px;
}
body.fullscreen-enabled.mobile #deviceOrientationToggle {
  right: 50px;
}

/* Move autorotate further left when both are present */
#autorotateToggle {
  right: 40px;
}
.mobile #autorotateToggle {
  right: 50px;
}
body.fullscreen-enabled #autorotateToggle {
  right: 80px;
}
body.fullscreen-enabled.mobile #autorotateToggle {
  right: 100px;
}

#deviceOrientationToggle .icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
}
.mobile #deviceOrientationToggle .icon {
  top: 10px;
  right: 10px;
}
#deviceOrientationToggle .icon.on { display: none; }
#deviceOrientationToggle .icon.off { display: block; }
#deviceOrientationToggle.enabled .icon.on { display: block; fill: #4ade80; stroke: #4ade80;}
#deviceOrientationToggle.enabled .icon.off { display: none; }
`;

fs.writeFileSync('./public/miranda-world/style.css', css + newCSS);
