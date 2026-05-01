import fs from 'fs';
import https from 'https';

const url = 'https://upload.wikimedia.org/wikipedia/commons/6/69/Gymnopedie_No._1_%28ISRC_USUAN1100787%29.mp3';
const dest = './public/miranda-world/music.mp3';

const file = fs.createWriteStream(dest);

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AIStudioProject/1.0'
  }
};

https.get(url, options, function(response) {
  if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307 || response.statusCode === 308) {
     https.get(response.headers.location, options, function(redirectResponse) {
         redirectResponse.pipe(file);
         file.on('finish', function() {
            file.close(() => console.log('Download complete (after redirect)'));
         });
     });
     return;
  }
  response.pipe(file);
  file.on('finish', function() {
    file.close(() => console.log('Download complete'));
  });
}).on('error', function(err) {
  fs.unlink(dest, () => {});
  console.error('Error downloading:', err.message);
});
