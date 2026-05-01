import fs from 'fs';
import https from 'https';

const url = 'https://upload.wikimedia.org/wikipedia/commons/6/69/Gymnopedie_No._1_%28ISRC_USUAN1100787%29.mp3';
const dest = './public/miranda-world/Gymnopedie.mp3';

const file = fs.createWriteStream(dest);
https.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close(() => console.log('Download complete'));  // close() is async, call cb after close completes.
  });
}).on('error', function(err) { // Handle errors
  fs.unlink(dest, () => {}); // Delete the file async. (But we don't check the result)
  console.error('Error downloading:', err.message);
});
