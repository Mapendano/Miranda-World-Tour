import fs from 'fs';
let js = fs.readFileSync('./public/miranda-world/index.js', 'utf8');

const musicJs = `
  var musicToggleElement = document.querySelector('#musicToggle');
  var bgMusic = document.querySelector('#bgMusic');

  if (bgMusic) {
    bgMusic.volume = 0.5;
    var playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(function(error) {
        // Auto-play was prevented by browser, wait for first click
        if (musicToggleElement && musicToggleElement.classList.contains('enabled')) {
            musicToggleElement.classList.remove('enabled');
        }
        var startAudio = function() {
          if (!musicToggleElement || musicToggleElement.classList.contains('enabled')) {
             bgMusic.play();
          }
          document.removeEventListener('click', startAudio);
        };
        document.addEventListener('click', startAudio);
      });
    }
  }

  function toggleMusic() {
    if (musicToggleElement.classList.contains('enabled')) {
      musicToggleElement.classList.remove('enabled');
      bgMusic.pause();
    } else {
      musicToggleElement.classList.add('enabled');
      bgMusic.play().catch(function(){}); // Catch autoplay policies
    }
  }
  
  if (musicToggleElement) {
    musicToggleElement.addEventListener('click', toggleMusic);
  }
`;

js = js.replace("autorotateToggleElement.addEventListener('click', toggleAutorotate);", 
  "autorotateToggleElement.addEventListener('click', toggleAutorotate);\n" + musicJs);

fs.writeFileSync('./public/miranda-world/index.js', js);
