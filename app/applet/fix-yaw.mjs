import fs from 'fs';
let code = fs.readFileSync('./public/miranda-world/vendor/DeviceOrientationControlMethod.js', 'utf8');
code = code.replace(/\/\/ this._dynamics.yaw.offset = -\(current.yaw - previous.yaw\);/g, 'this._dynamics.yaw.offset = -(current.yaw - previous.yaw);');
code = code.replace(/\/\/ this.emit\('parameterDynamics', 'yaw', this._dynamics.yaw\);/g, "this.emit('parameterDynamics', 'yaw', this._dynamics.yaw);");
fs.writeFileSync('./public/miranda-world/vendor/DeviceOrientationControlMethod.js', code);
