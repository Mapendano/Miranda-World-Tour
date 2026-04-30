import fs from 'fs';
const file = './public/miranda-world/vendor/DeviceOrientationControlMethod.js';
let code = fs.readFileSync(file, 'utf8');

// Replace the commented out yaw offset with the active yaw offset
code = code.replace(/\/\/ this\._dynamics\.yaw\.offset = -\(current\.yaw - previous\.yaw\);/g, 'this._dynamics.yaw.offset = -(current.yaw - previous.yaw);');
code = code.replace(/\/\/ this\.emit\('parameterDynamics', 'yaw', this\._dynamics\.yaw\);/g, "this.emit('parameterDynamics', 'yaw', this._dynamics.yaw);");

fs.writeFileSync(file, code);
