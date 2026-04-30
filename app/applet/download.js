const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/google/marzipano/master/demos/device-orientation/DeviceOrientationControlMethod.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('./public/miranda-world/vendor/DeviceOrientationControlMethod.js', data);
    console.log('done');
  });
});
