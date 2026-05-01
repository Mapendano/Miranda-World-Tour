fetch('https://upload.wikimedia.org/wikipedia/commons/6/69/Gymnopedie_No._1_%28ISRC_USUAN1100787%29.mp3').then(r => console.log('HTTP ' + r.status)).catch(e => console.log('Error', e))
