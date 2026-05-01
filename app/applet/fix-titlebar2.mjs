import fs from 'fs';
let css = fs.readFileSync('./public/miranda-world/style.css', 'utf8');

css = css.replace(/#titleBar \{\s*position: absolute;\s*top: 0;\s*left: 0;\s*right: \d+px;/g, '#titleBar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 140px;');
css = css.replace(/\.mobile #titleBar \{\s*height: 50px;\s*right: \d+px;/g, '.mobile #titleBar {\n  height: 50px;\n  right: 170px;');
css = css.replace(/body\.fullscreen-enabled #titleBar \{\s*right: \d+px;/g, 'body.fullscreen-enabled #titleBar {\n  right: 180px;');
css = css.replace(/body\.fullscreen-enabled\.mobile #titleBar \{\s*right: \d+px;/g, 'body.fullscreen-enabled.mobile #titleBar {\n  right: 220px;');

css = css.replace(/#titleBar \.sceneName \{\s*width: 100%;\s*height: 100%;/g, '#titleBar .sceneName {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;');

// Let's also ensure the text is left aligned so it doesn't artificially center into the overlap zone if not needed
css = css.replace(/#titleBar \{\s*(.*?)\s*text-align: center;/gs, (match, p1) => {
    return `#titleBar {${p1}text-align: left;`;
});

// Give titlebar text some padding from the left so it looks nice
css = css.replace(/padding: 5px;/g, 'padding: 5px 15px;');

fs.writeFileSync('./public/miranda-world/style.css', css);
