import fs from 'fs';
let js = fs.readFileSync('./public/miranda-world/index.js', 'utf8');

const deviceOrientationCode = `
  // Device Orientation Setup
  var deviceOrientationToggleElement = document.querySelector('#deviceOrientationToggle');
  var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
  var controls = viewer.controls();
  controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);
  
  function enableDeviceOrientation() {
    deviceOrientationControlMethod.getPitch(function(err, pitch) {
      if (!err) {
        viewer.view().setPitch(pitch);
      }
    });
    controls.enableMethod('deviceOrientation');
    deviceOrientationToggleElement.classList.add('enabled');
  }

  function disableDeviceOrientation() {
    controls.disableMethod('deviceOrientation');
    deviceOrientationToggleElement.classList.remove('enabled');
  }

  function toggleDeviceOrientation() {
    if (deviceOrientationToggleElement.classList.contains('enabled')) {
      disableDeviceOrientation();
    } else {
      if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(function(permissionState) {
          if (permissionState === 'granted') {
            enableDeviceOrientation();
          }
        }).catch(console.error);
      } else {
        enableDeviceOrientation();
      }
    }
  }

  if (deviceOrientationToggleElement) {
    deviceOrientationToggleElement.addEventListener('click', toggleDeviceOrientation);
  }
`;

js = js.replace('var viewer = new Marzipano.Viewer(panoElement, viewerOpts);', 
  'var viewer = new Marzipano.Viewer(panoElement, viewerOpts);\n' + deviceOrientationCode);

fs.writeFileSync('./public/miranda-world/index.js', js);
