fetch('https://archive.org/metadata/GymnopedieNo.1')
.then(r => r.json())
.then(json => {
  console.log(json.files.filter(f => f.name.endsWith('.mp3')));
});
