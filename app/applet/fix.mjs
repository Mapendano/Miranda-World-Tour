import fs from 'fs';
const text = fs.readFileSync('./public/miranda-world/data.js', 'utf8');
const fixed = text.replace(/\{\s*"tileSize":\s*256,\s*"size":\s*256,\s*"fallbackOnly":\s*false\s*\},\s*\{\s*"tileSize":\s*512,\s*"size":\s*512\s*\}/g, '{ "tileSize": 256, "size": 256 }');
fs.writeFileSync('./public/miranda-world/data.js', fixed);
