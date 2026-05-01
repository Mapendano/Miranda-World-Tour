import fs from 'fs';
let css = fs.readFileSync('./public/miranda-world/style.css', 'utf8');

css = css.replace(/#titleBar \{\s*position: absolute;\s*top: 0;\s*left: 0;\s*right: \d+px;/g, '#titleBar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 120px;');
css = css.replace(/\.mobile #titleBar \{\s*height: 50px;\s*right: \d+px;/g, '.mobile #titleBar {\n  height: 50px;\n  right: 150px;');
css = css.replace(/body\.fullscreen-enabled #titleBar \{\s*right: \d+px;/g, 'body.fullscreen-enabled #titleBar {\n  right: 160px;');
css = css.replace(/body\.fullscreen-enabled\.mobile #titleBar \{\s*right: \d+px;/g, 'body.fullscreen-enabled.mobile #titleBar {\n  right: 200px;');

fs.writeFileSync('./public/miranda-world/style.css', css);
